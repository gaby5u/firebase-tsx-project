import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Form.css";

interface CretaeFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title!"),
    description: yup.string().required("You must add a description!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CretaeFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");
  const navigate = useNavigate();

  const onCreatePost = async (data: CretaeFormData) => {
    await addDoc(postsRef, {
      ...data, //it contains whatever data contains
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" className="submit-form-button" />
    </form>
  );
};

export default CreateForm;

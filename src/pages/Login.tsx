import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="container">
      <p>Sign In with Google To Continue</p>
      <button onClick={signInWithGoogle} className="sign-in-button">
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;

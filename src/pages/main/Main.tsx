import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      {postsList?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Main;

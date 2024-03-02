import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postliststore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList,addPosts } = useContext(PostListData);
  const Handleonpostclick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=>{
      addPosts(data.posts);
    });

  }
  return (
    <>
    {postList.length===0 && (<WelcomeMessage Onpostclick={Handleonpostclick}/>)} 
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
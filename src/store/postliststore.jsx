import { createContext, useReducer } from "react";
export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  addPosts:()=>{},
});

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
if(action.type==="DELETE_POST"){
  newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
}
else if(action.type==="INITIAL_ADD_POSTS"){
  newPostList=action.payload.posts;
}
else if(action.type==="ADD_POST"){
  newPostList=[action.payload,...currPostList];
} 

  return newPostList;
}
const Postliststore=({children})=>{
  const[postList,dispatch]=useReducer(postListReducer,[]);
  const addPost=(userId,title,body,reactions,tags)=>{
   dispatch({
      type:"ADD_POST",
      payload:{
        id:Date.now().toString(),
        userId:userId,
        title:title,
        body:body,
        reactions:reactions ,
        tags:tags,
      },
    });
  }
  const addPosts=(posts)=>{
    dispatch({
      type:"INITIAL_ADD_POSTS",
      payload:{
        posts,
      },
    });
  }
  const deletePost=(postId)=>{
    dispatch({
      type:"DELETE_POST",
      payload:{
        postId,
      },
  });}
  return (<PostList.Provider value={{postList,addPost,deletePost,addPosts}}>{children}</PostList.Provider>);
};
  export default Postliststore;

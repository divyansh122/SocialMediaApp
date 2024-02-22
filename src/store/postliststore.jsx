import { createContext, useReducer } from "react";
export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
});

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
if(action.type==="DELETE_POST"){
  newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
}
else if(action.type==="ADD_POST"){
  newPostList=[action.payload,...currPostList];
}
  return newPostList;
}
const Postliststore=({children})=>{
  const[postList,dispatch]=useReducer(postListReducer,DEFAULT_POST_LIST);
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
  const deletePost=(postId)=>{
    dispatch({
      type:"DELETE_POST",
      payload:{
        postId,
      },
  });}
  return (<PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>);
};
  
    const DEFAULT_POST_LIST=[{
      id:"1",
      title:"Going to haridwar",
      body:"Going to haridwar to enjoy and take fun ",
      reactions:20,
      userId:"user-10",
      tags:["vacation","fun","haridwar","insta"],
    },
    {
      id:"2",
      title:"best day ",
      body:"this is the best day of my life  ",
      reactions:60,
      userId:"user-12",
      tags:["best","day","life","insta"],
    },
  ];
  export default Postliststore;

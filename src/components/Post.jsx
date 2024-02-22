import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import {PostList} from "../store/postliststore";
const Post = ({post}) => { 
  const {deletePost}=useContext(PostList);
  return (
    <div className="card post-card" style={{width:"30rem"}} >
      <div className="card-body post-card">
        <h5 className="card-title ">{post.title}<span className="position-absolute top-0 start-100 translate-middle badge  bg-black " onClick={()=>deletePost(post.id)}><MdDelete/></span></h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=>(
          <span className="badge bg-primary gap" key={tag}>{tag}</span>
        ))}<br/><hr style={{height:"3px"}}/>
        <h5 className="reaction" ><AiFillLike/>{post.reactions}</h5>
      </div>
    </div>
  );
}

export default Post;

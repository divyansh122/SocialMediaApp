import { useContext, useRef } from "react";
import { PostList } from "../store/postliststore";

const Creatpost = () => {
  const{addPost}=useContext(PostList);
  const userIdEle = useRef();
  const titleEle = useRef();
  const postbodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();
const handleSubmit=(event)=>{
  event.preventDefault();
  const userId=userIdEle.current.value;
  const title=titleEle.current.value;
  const body=postbodyEle.current.value;
  const reactions=parseInt(reactionsEle.current.value);
  const tags=tagsEle.current.value.split(",");

  addPost(userId,title,body,reactions,tags);
  userIdEle.current.value="";
  titleEle.current.value="";
  postbodyEle.current.value="";
  reactionsEle.current.value=" ";
  tagsEle.current.value=" ";
};
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your userId here</label>
        <input type="text" ref={userIdEle} className="form-control" id="userId" placeholder="Your userId" required />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" ref={titleEle} className="form-control" id="title" placeholder="What's happening today?" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Tell us about it</label>
        <textarea rows="5" className="form-control" id="body" ref={postbodyEle} placeholder="Enter your title for the post" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" ref={reactionsEle} className="form-control" id="reactions" placeholder="How many people reacted" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags</label>
        <input type="text" ref={tagsEle} className="form-control" id="tags" placeholder="Relevant tags" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Creatpost;

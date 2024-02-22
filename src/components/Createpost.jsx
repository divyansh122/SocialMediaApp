import { useRef } from "react";

const Creatpost = () => {
  const userId = useRef();
  const title = useRef();
  const postbody = useRef();
  const reactions = useRef();
  const tags = useRef();

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your userId here</label>
        <input type="text" ref={userId} className="form-control" id="userId" placeholder="Your userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" ref={title} className="form-control" id="title" placeholder="What's happening today?" />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Tell us about it</label>
        <textarea rows="5" className="form-control" id="body" ref={postbody} placeholder="Enter your title for the post" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" ref={reactions} className="form-control" id="reactions" placeholder="How many people reacted" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags</label>
        <input type="text" ref={tags} className="form-control" id="tags" placeholder="Relevant tags" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Creatpost;

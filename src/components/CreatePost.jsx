import { useContext } from "react"
import { useRef } from "react"
import { PostListContext } from "../store/post-list-store"

function CreatePost(){
  const {addPost} = useContext(PostListContext)

  const postTitleElem = useRef()
  const postBodyElem = useRef()
  const postTagsElem = useRef()

  const handleOnSubmit = (event) => {
    const min = 1
    const maxUser = 1000
    const maxReact = 100
    event.preventDefault();
    const userId = "user-"+Math.floor(Math.random()
    * (maxUser - min + 1)) + min;
    const title = postTitleElem.current.value
    const body = postBodyElem.current.value
    const reactions =Math.floor(Math.random()
    * (maxReact - min + 1)) + min
    // const tags = postTagsElem.current.value.split(/(\s+)/)
    const tags = postTagsElem.current.value.split(" ").map(tag => tag.trim())
    addPost(userId, title, body, reactions, tags)
  }

  return(
    <>
      <form className="custom-create-post" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={postTitleElem} placeholder="Enter Post Title..." className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows={4} ref={postBodyElem} type="text" placeholder="Enter Post Body..." className="form-control" id="body" />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Post Tags</label>
          <input type="text" ref={postTagsElem} placeholder="Enter Post Tags using space..." className="form-control" id="tags" />
        </div>
        <button type="submit" className="btn btn-primary">Psot</button>
      </form>
    </>
  )
}

export default CreatePost
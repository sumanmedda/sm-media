import { MdDelete } from "react-icons/md";

function Post({post}){
  return(
    <>
      <div className="card custom-post-card" style={{width: "30rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"><MdDelete />
            </span>
            <span className="badge text-bg-success" style={{margin: '0px 5px'}}>{post.reactions > 10 ? post.reactions+'+' : post.reactions}</span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map(tags => <span key={tags} className="badge text-bg-primary custom-badge">{tags}</span>)}
        </div>
      </div>
    </>
  )
}

export default Post
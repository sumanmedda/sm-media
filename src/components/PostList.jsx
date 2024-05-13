import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store"
import MessageDiv  from "./MessageDiv"
import LoadingIndicator from "./LoadingIndicator"

function PostList(){
    const {postList, loadingState} = useContext(PostListContext)

  return(
    <>
      {loadingState && <LoadingIndicator />}
      {!loadingState && postList.length === 0 && <MessageDiv/> }  
      {!loadingState && postList.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList
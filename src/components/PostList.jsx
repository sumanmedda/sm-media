import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store"
import MessageDiv  from "./MessageDiv"
import { useEffect } from "react"
import { useState } from "react"
import LoadingIndicator from "./LoadingIndicator"

function PostList(){
  
  const {postList, addInitialPost} = useContext(PostListContext)

  const [loadingState, setLoadingState] = useState(false)
  
  useEffect(()=>{
    setLoadingState(true)
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPost(data.posts)
      setLoadingState(false)
    });
  }, [])

  return(
    <>
      {loadingState && <LoadingIndicator />}
      {!loadingState && postList.length === 0 && <MessageDiv/> }  
      {!loadingState && postList.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList
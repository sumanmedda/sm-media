import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store"
import MessageDiv  from "./MessageDiv"
import { useEffect } from "react"

function PostList(){
  
  const {postList, addInitialPost} = useContext(PostListContext)
  
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPost(data.posts)
    });
  }, [])

  return(
    <>
      {postList.length === 0 ? <MessageDiv/> : postList.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostList
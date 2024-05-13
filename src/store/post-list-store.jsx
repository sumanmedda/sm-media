import { useReducer, createContext, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  loadingState: false,
  addPost: () => {},
  deletePost: () => {},
  }
)

const PostListReducer = (currentPostList, action) => {
  if(action.type === 'DELETE_POST'){
    currentPostList = currentPostList.filter(post => post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    currentPostList = [action.payload, ...currentPostList]
  }else if(action.type === 'ADD_INITIAL_POSTS'){
    currentPostList = action.payload.posts
  }
  return currentPostList
}

function PostListProvider({children}){

  const [postList, dispatchPostList]= useReducer(PostListReducer, [])
  const [loadingState, setLoadingState] = useState(false)

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: post
    })
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      }
    })
  }

  function addInitialPost(posts){
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload:{
        posts
      }
    })
  }

  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal
  
    setLoadingState(true)
    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then(data => {
      addInitialPost(data.posts)
      setLoadingState(false)
    });

    return () => {
      controller.abort()
    }

  }, [])


  return(
    <PostListContext.Provider value={{postList, loadingState, addPost, deletePost}}>
      {children}
    </PostListContext.Provider>
  )
}



export default PostListProvider
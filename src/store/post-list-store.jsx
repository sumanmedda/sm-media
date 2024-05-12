import { useReducer } from "react";
import { createContext } from "react";



export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  onCheckPostClick: () => {}
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

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id : Date.now().toLocaleString(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
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

  return(
    <PostListContext.Provider value={{postList, addPost, deletePost, addInitialPost}}>
      {children}
    </PostListContext.Provider>
  )
}



export default PostListProvider
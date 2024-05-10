import { useReducer } from "react";
import { createContext } from "react";

const DefaultPost = [
  {
    id : 1,
    title: "Post 1",
    body: "Post 1 body",
    reactions: 2,
    userId: 'user-8',
    tags: ['vacation', 'Delhi']
  },
  {
    id : 2,
    title: "Post 2",
    body: "Post 2 body",
    reactions: 12,
    userId: 'user-7',
    tags: ['mobile', 'Technology']
  },
  {
    id : 3,
    title: "Post 3",
    body: "Post 3 body",
    reactions: 8,
    userId: 'user-6',
    tags: ['games', 'GTA5']
  }
]

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
  }
)

const PostListReducer = (currentPostList, action) => {
  if(action.type === 'DELETE_POST'){
    currentPostList = currentPostList.filter(post => post.id !== action.payload.postId)
  }
  return currentPostList
}

function PostListProvider({children}){
  const [postList, dispatchPostList]= useReducer(PostListReducer, DefaultPost)

  const addPost = () => {}

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      }
    })
  }

  return(
    <PostListContext.Provider value={{postList, addPost, deletePost}}>
      {children}
    </PostListContext.Provider>
  )
}



export default PostListProvider
import { RECEIVE_CATEGORY_POSTS } from '../actions/categoryPosts'

export default function categoryPosts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORY_POSTS :
      let posts = null
      const post_keys = Object.keys(action.posts)
      post_keys.map((i)=>(
        posts = {
          ...posts,
          [action.posts[i].id]: action.posts[i]
        }
      ))

      return {
        ...state,
        ...posts
      }
    default :
      return state
  }
}
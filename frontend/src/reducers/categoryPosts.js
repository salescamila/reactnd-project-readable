import { RECEIVE_CATEGORY_POSTS } from '../actions/categoryPosts'

export default function categoryPosts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORY_POSTS :
      let posts = null
      const post_keys = Object.keys(action.categoryPosts)
      post_keys.map((i)=>(
        posts = {
          ...posts,
          [action.categoryPosts[i].id]: action.categoryPosts[i]
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
import { RECEIVE_CATEGORY_POSTS } from '../actions/categoryPosts'

export default function categoryPosts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORY_POSTS :
      return {
        ...state,
        ...action.categoryPosts
      }
    default :
      return state
  }
}
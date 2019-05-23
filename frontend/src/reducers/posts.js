import { RECEIVE_POSTS, RECEIVE_SINGLE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case RECEIVE_SINGLE_POST:
      return {
        ...state,
        ...action.singlePost
      }
    default :
      return state
  }
}
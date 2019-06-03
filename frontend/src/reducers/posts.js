import { RECEIVE_POSTS,
         ADD_POST,
         ADD_VOTE_POST,
         DELETE_POST,
         UPDATE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  let posts = null
  let state_keys = null
  switch(action.type) {
    case RECEIVE_POSTS :
      state_keys = Object.keys(action.posts)
      state_keys.map((i)=>(
        posts = {
          ...posts,
          [action.posts[i].id]: action.posts[i]
        }
      ))
      return {
        ...state,
        ...posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case ADD_VOTE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + action.count
        }
      }
    case DELETE_POST:
      state_keys = Object.keys(state)
      state_keys.map((i)=>(
        state[i].id !== action.id
          ? posts = {
              ...posts,
              [state[i].id]: state[i]
            }
          : null
      ))
      return {
        ...posts
      }
    case UPDATE_POST:
      return {
        ...state
      }
    default :
      return state
  }
}

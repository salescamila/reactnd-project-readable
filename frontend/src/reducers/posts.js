import { RECEIVE_POSTS, ATT_VOTE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case ATT_VOTE_POST:
      const keys = Object.keys(state)
      keys.map((i)=>(
        state[i].id === action.id 
          ? state[i].voteScore = state[i].voteScore + action.count
          : null
      ))
      
      return {
        ...state,
      }
    default :
      return state
  }
}

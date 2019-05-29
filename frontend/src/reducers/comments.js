import { RECEIVE_COMMENTS, ATT_VOTE_COMMENT } from '../actions/comments'

export default function comments (state = {}, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        ...action.comments
      }
    case ATT_VOTE_COMMENT:
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
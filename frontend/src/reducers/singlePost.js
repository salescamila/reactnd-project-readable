import { RECEIVE_SINGLE_POST, ADD_VOTE_SINGLE_POST, ADD_COMMENT_COUNT } from '../actions/singlePost'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_SINGLE_POST:
      return {
        ...state,
        ...action.singlePost
      }
    case ADD_VOTE_SINGLE_POST:
      return {
        ...state,
        voteScore: state.voteScore + action.count
      }
    case ADD_COMMENT_COUNT:
      return {
        ...state,
        commentCount: state.commentCount + 1
      }
    default :
      return state
  }
}
import { RECEIVE_SINGLE_POST,
         ADD_VOTE_SINGLE_POST,
         COMMENT_COUNT,
         DELETE_SINGLE_POST } from '../actions/singlePost'

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
    case COMMENT_COUNT:
      return {
        ...state,
        commentCount: state.commentCount + action.count
      }
    case DELETE_SINGLE_POST:
      return {}
    default :
      return state
  }
}
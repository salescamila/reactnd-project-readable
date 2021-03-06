import { RECEIVE_COMMENTS, 
         RECEIVE_SINGLE_COMMENT,
         ADD_COMMENT, 
         ADD_VOTE_COMMENT, 
         DELETE_COMMENT,
         UPDATE_COMMENT } from '../actions/comments'

export default function comments (state = {}, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS :
      let _comments = null
      const post_keys = Object.keys(action.comments)
      post_keys.map((i)=>(
        _comments = {
          ..._comments,
          [action.comments[i].id]: action.comments[i]
        }
      ))

      return {
        ...state,
        ..._comments
      }
    case RECEIVE_SINGLE_COMMENT:
      return {
        ...state,
        ...action.singleComment
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case ADD_VOTE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + action.count
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      }
    case UPDATE_COMMENT:
      return {
        ...state
      }
    default :
      return state
  }
}
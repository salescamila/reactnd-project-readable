import { showLoading, hideLoading } from 'react-redux-loading'
import { saveComment, deleteComment, voteComment } from "../utils/api";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function handleAddComment (comment) {
  return (dispatch/*, getState*/) => {
    //const { authedUser } = getState()
    dispatch(showLoading())

    return saveComment({
        ...comment,
        author: 'camilasales'
        //author: authedUser
      })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}

export function handleDeleteComment (commentId) {
  return (dispatch) => {
    dispatch(showLoading())
    return deleteComment(commentId)
      .then(() => {
        dispatch(hideLoading())
      })
  }
}

export function handleVoteComment (commentId, vote) {
  return (dispatch) => {
    dispatch(showLoading())
    return voteComment(commentId, vote)
      .then(() => {
        dispatch(hideLoading())
      })
  }
}
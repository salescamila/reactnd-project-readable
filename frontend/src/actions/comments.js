import { showLoading, hideLoading } from 'react-redux-loading'
import { saveComment, deleteComment, voteComment } from "../utils/api";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_VOTE_COMMENT = 'ADD_VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function addVoteComment (commentId, count) {
  return {
    type: ADD_VOTE_COMMENT,
    id: commentId,
    count
  }
}

export function delComment (commentId) {
  return {
    type: DELETE_COMMENT,
    id: commentId
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
      .then((comment) => {
        dispatch(addComment(comment))
        dispatch(hideLoading())
      })
  }
}

export function handleDeleteComment (commentId) {
  return (dispatch) => {
    dispatch(showLoading())
    return deleteComment(commentId)
      .then(() => {
        dispatch(delComment(commentId))
        dispatch(hideLoading())
      })
  }
}

export function handleVoteComment (commentId, vote) {
  return (dispatch) => {
    dispatch(showLoading())
    let count

    vote.option === 'upVote'
    ? count = 1
    : count = -1

    return voteComment(commentId, vote)
      .then(() => {
        dispatch(addVoteComment(commentId, count))
        dispatch(hideLoading())
      })
  }
}
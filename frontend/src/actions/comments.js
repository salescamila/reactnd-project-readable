import { showLoading, hideLoading } from 'react-redux-loading'
import { saveComment, deleteComment, 
         voteComment, editComment,
         getSingleComment } from "../utils/api"
import { commentCount } from '../actions/singlePost'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_VOTE_COMMENT = 'ADD_VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function receiveSingleComment (singleComment) {
  return {
    type: RECEIVE_SINGLE_COMMENT,
    singleComment,
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
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

export function getComment (id) {
  return (dispatch) => {
    dispatch(showLoading())

    return getSingleComment(id)
      .then(({ comment }) => {
        dispatch(receiveSingleComment(comment))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getComment: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the comment. Try again.')
      })
  }
}

export function handleAddComment (commentToAdd) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveComment(commentToAdd)
      .then((comment) => {
        dispatch(addComment(comment))
        dispatch(commentCount(1))
        dispatch(hideLoading())
      })
  }
}

export function handleEditComment (commentId, commentToEdit) {
  return (dispatch) => {
    dispatch(showLoading())
    return editComment(commentId, commentToEdit)
      .then((comment) => {
        dispatch(updateComment(comment))
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
        dispatch(commentCount(-1))
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
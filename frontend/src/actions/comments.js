import { showLoading, hideLoading } from 'react-redux-loading'
import { saveComment, deleteComment, voteComment } from "../utils/api";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ATT_VOTE_COMMENT = 'ATT_VOTE_COMMENT'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

function attVoteComment (commentId, count) {
  return {
    type: ATT_VOTE_COMMENT,
    id: commentId,
    count
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
    let count

    vote.option === 'upVote'
    ? count = 1
    : count = -1
    
    return voteComment(commentId, vote)
      .then(() => {        
        dispatch(attVoteComment(commentId, count))
        dispatch(hideLoading())
      })
  }
}
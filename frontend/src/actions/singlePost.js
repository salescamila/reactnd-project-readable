import { showLoading, hideLoading } from 'react-redux-loading'
import { getSinglePost, votePost } from '../utils/api'
import { receiveComments } from '../actions/comments'

export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'
export const ADD_VOTE_SINGLE_POST = 'ADD_VOTE_SINGLE_POST'
export const COMMENT_COUNT = 'COMMENT_COUNT'

export function receiveSinglePost (singlePost) {
  return {
    type: RECEIVE_SINGLE_POST,
    singlePost,
  }
}

export function addVoteSinglePost (count) {
  return {
    type: ADD_VOTE_SINGLE_POST,
    //id: postId,
    count
  }
}

export function commentCount (count) {
  return {
    type: COMMENT_COUNT,
    count
  }
}

export function getPost (id) {
  return (dispatch) => {
    dispatch(showLoading())

    return getSinglePost(id)
      .then(({ post, comments }) => {
        dispatch(receiveSinglePost(post))
        dispatch(receiveComments(comments))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getPost: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the post. Try again.')
      })
  }
}

export function handleVotePost (postId, vote) {
  return (dispatch) => {
    dispatch(showLoading())
    let count

    vote.option === 'upVote'
    ? count = 1
    : count = -1

    return votePost(postId, vote)
      .then(() => {
        dispatch(addVoteSinglePost(postId, count))
        dispatch(hideLoading())
      })
  }
}
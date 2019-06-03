import { showLoading, hideLoading } from 'react-redux-loading'
import { getCategory, votePost } from '../utils/api'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const ADD_VOTE_CATEGORY_POST = 'ADD_VOTE_CATEGORY_POST'

export function receiveCategoryPosts (categoryPosts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    categoryPosts,
  }
}

export function addVotePost (postId, count) {
  return {
    type: ADD_VOTE_CATEGORY_POST,
    id: postId,
    count
  }
}

export function getCategoryPosts (path) {
  return (dispatch) => {
    dispatch(showLoading())

    return getCategory(path)
      .then(({ categoryPosts }) => {
        dispatch(receiveCategoryPosts(categoryPosts))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getCategoryPosts: ', e)
        dispatch(hideLoading())
        alert('The was an error getting all the posts of a category. Try again.')
      })
  }
}

export function handleVoteCategoryPost (postId, vote) {
  return (dispatch) => {
    dispatch(showLoading())
    let count

    vote.option === 'upVote'
    ? count = 1
    : count = -1

    return votePost(postId, vote)
      .then(() => {
        dispatch(addVotePost(postId, count))
        dispatch(hideLoading())
      })
  }
}
import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllPosts, getCategory, savePost, deletePost, votePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const ADD_VOTE_POST = 'ADD_VOTE_POST'
export const DELETE_POST = 'DELETE_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function addVotePost (postId, count) {
  return {
    type: ADD_VOTE_POST,
    id: postId,
    count
  }
}

export function removePost(postId) {
  return {
    type: DELETE_POST,
    id: postId,
  }
}

export function getPosts () {
  return (dispatch) => {
    dispatch(showLoading())

    return getAllPosts()
      .then(({ posts }) => {
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getPosts: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the posts. Try again.')
      })
  }
}

export function getCategoryPosts (path) {
  return (dispatch) => {
    dispatch(showLoading())

    return getCategory(path)
      .then(({ posts }) => {
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getCategoryPosts: ', e)
        dispatch(hideLoading())
        alert('The was an error getting all the posts of a category. Try again.')
      })
  }
}

export function handleAddPost (postToAdd) {
  return (dispatch) => {
    dispatch(showLoading())

    return savePost(postToAdd)
      .then((post) => {
        dispatch(addPost(post))
        dispatch(hideLoading())
      })
  }
}

export function handleDeletePost (postId) {
  return (dispatch) => {
    dispatch(showLoading())
    return deletePost(postId)
      .then(() => {
        dispatch(removePost(postId))
        dispatch(hideLoading())
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
        dispatch(addVotePost(postId, count))
        dispatch(hideLoading())
      })
  }
}
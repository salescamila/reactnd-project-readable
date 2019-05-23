import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllPosts, getSinglePost } from '../utils/api'
import { receiveComments } from '../actions/comments'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function receiveSinglePost (singlePost) {
  return {
    type: RECEIVE_SINGLE_POST,
    singlePost,
  }
}

export function getPost (id) {
  return (dispatch) => {
    dispatch(showLoading())

    return getSinglePost(id)
      .then(({ singlePost, comments }) => {
        dispatch(receiveSinglePost(singlePost))
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
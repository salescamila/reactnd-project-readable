import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllPosts, getSinglePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
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
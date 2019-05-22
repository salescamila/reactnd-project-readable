import { showLoading, hideLoading } from 'react-redux-loading'
import { getSinglePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function receiveSinglePost (posts) {
  return {
    type: RECEIVE_SINGLE_POST,
    posts,
  }
}

export function getPost (id) {
  return (dispatch) => {
    dispatch(showLoading())

    return getSinglePost(id)
      .then(({ posts }) => {
        dispatch(receiveSinglePost(posts))
        console.log('ID...', id)
        console.log('Single post...', posts)
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getPost: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the post. Try again.')
      })
  }
}
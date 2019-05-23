import { showLoading, hideLoading } from 'react-redux-loading'
import { getSinglePost } from '../utils/api'
import { receiveComments } from '../actions/comments'

export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

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
      .then(({ post, comments }) => {
        dispatch(receiveSinglePost(post))
        dispatch(receiveComments(comments))
        console.log('getSinglePost...', post)
        console.log('getSinglePost comments...', comments)
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getPost: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the post. Try again.')
      })
  }
}
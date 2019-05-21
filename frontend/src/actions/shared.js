
import { getAll } from '../utils/api'
import { receivePosts } from '../actions/posts'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())

    return getAll()
      .then(({ posts }) => {
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getAll: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the posts. Try again.')
      })
  }
}

import { getInitialData } from '../utils/api'
import { receiveCategories } from '../actions/categories'
import { receivePosts } from '../actions/posts'
import { receiveComments } from '../actions/comments'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ categories, posts, comments }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(receiveComments(comments))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getAll: ', e)
        dispatch(hideLoading())
        alert('The was an error getting the posts. Try again.')
      })
  }
}
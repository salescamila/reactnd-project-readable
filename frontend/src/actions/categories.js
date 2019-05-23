import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllCategories } from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function getCategories () {
  return (dispatch) => {
    dispatch(showLoading())

    return getAllCategories()
      .then(({ categories }) => {
        dispatch(receiveCategories(categories))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in getAllCategories: ', e)
        dispatch(hideLoading())
        alert('The was an error getting all the categories. Try again.')
      })
  }
}
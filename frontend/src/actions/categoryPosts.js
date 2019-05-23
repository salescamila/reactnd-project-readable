import { showLoading, hideLoading } from 'react-redux-loading'
import { getCategory } from '../utils/api'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'

export function receiveCategoryPosts (categoryPosts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    categoryPosts,
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
import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllPosts, getCategory, savePost, deletePost } from '../utils/api'

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

export function handleAddPost (post) {
  return (dispatch/*, getState*/) => {
    //const { authedUser } = getState()
    dispatch(showLoading())

    return savePost({
        ...post,
        author: 'camilasales'
        //author: authedUser
      })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}

export function handleDeletePost (postId) {
  return (dispatch) => {
    dispatch(showLoading())
    return deletePost(postId)
      .then(() => {
        dispatch(hideLoading())
      })
  }
}
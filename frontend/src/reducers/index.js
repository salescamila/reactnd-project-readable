import { combineReducers } from 'redux'
import categories from './categories'
import categoryPosts from './categoryPosts'
import posts from './posts'
import singlePost from './singlePost'
import comments from './comments'
import order from './order'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  order,
  categories,
  categoryPosts,
  posts,
  singlePost,
  comments,
  loadingBar: loadingBarReducer,
})
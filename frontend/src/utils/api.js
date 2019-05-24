import {
  _getAllCategories,
  _getGategory,
  _getAllPosts,
  _getPost,
  _savePost,
  _getAllComments,
  _getComment,
  generateUID,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getAllCategories(),
    _getAllPosts(),
    _getAllComments(),
  ]).then(([categories, posts, comments]) => ({
    categories,
    posts,
    comments
  }))
}

export function getAllCategories () {
  return Promise.all([
    _getAllCategories(),
  ]).then(([categories]) => ({
    categories
  }))
}

export function getCategory (categoryId) {
  return Promise.all([
    _getGategory(categoryId),
  ]).then(([categoryPosts]) => ({
    categoryPosts
  }))
}

export function getAllPosts () {
  return Promise.all([
    _getAllPosts(),
  ]).then(([posts]) => ({
    posts
  }))
}

export function getSinglePost (postId) {
  return Promise.all([
    _getPost(postId),
    _getAllComments(postId),
  ]).then(([post, comments]) => ({
    post,
    comments
  }))
}

export function savePost (post) {
  const formattedPost = {
    ...post,
    id: generateUID(),
    timestamp: Date.now(),
  }
  console.log('formattedPost...',formattedPost)
  return _savePost(formattedPost)
}

export function getAllComments (postId) {
  return Promise.all([
    _getAllComments(postId),
  ]).then(([comments]) => ({
    comments
  }))
}

export function getComment (commentId) {
  return Promise.all([
    _getComment(commentId),
  ]).then(([comment]) => ({
    comment
  }))
}
import {
  _getAllCategories, 
  _getGategory, 
  _getAll, 
  _getPost,
  _getAllComments,
  _getComment,
} from './_DATA.js'

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
  ]).then(([posts]) => ({
    posts
  }))
}

export function getAll () {
  return Promise.all([
    _getAll(),
  ]).then(([posts]) => ({
    posts
  }))
}

export function getPost (postId) {
  return Promise.all([
    _getPost(postId),
  ]).then(([post]) => ({
    post
  }))
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
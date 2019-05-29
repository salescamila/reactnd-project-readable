import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { handleDeletePost } from '../actions/posts'

class Post extends Component {
  handleVoteUp = (e) => {
    e.preventDefault()
    //To-do: dispatch Votação
  }
  handleVoteDown = (e) => {
    e.preventDefault()
    //To-do: dispatch Votação
  }
  handleDelete = (e) => {
    e.preventDefault()

    const { id } = this.props.post

    //dispatch(handleDeletePost({id}))
  }

  render() {
    const { post } = this.props

    if (post === null) {
      return <p>Essa postagem não existe.</p>
    }

    const {
      id, author, commentCount, timestamp, title, voteScore
    } = post

    return(
      <div className='tweet'>
          <div className='tweet-info'>
            <Link to={`/post/${id}`}><p className='link'>Title: {title}</p></Link>
            <span>{formatDate(timestamp)}</span>
            <span>Author: {author}</span>
            <span>Total Comments: {commentCount}</span>
            <span>Score: {voteScore}</span>
            <span>Votação Up/Down</span>
            <button onClick={this.handleDelete}>
                [Delete Post]
            </button>
          </div>
      </div>
    )
  }
}

function mapStateToProps ({posts, categoryPosts}, { id, dashboard }) {
  if ( dashboard ) {
    return{
      post: posts
        ? posts[id]
        : null
    }
  } else {
    return{
      post: categoryPosts
        ? categoryPosts[id]
        : null
    }
  }
}

export default withRouter(connect(mapStateToProps)(Post))
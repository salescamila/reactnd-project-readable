import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { handleVotePost } from '../actions/posts'
import { handleVoteCategoryPost } from '../actions/categoryPosts'

class Post extends Component {
  handleVoteUp = (e) => {
    e.preventDefault()
    const { dispatch, post, dashboard } = this.props
    const {id} = post

    if (dashboard) {
      dispatch(handleVotePost(id, {option: 'upVote'}))
    } else {
      dispatch(handleVoteCategoryPost(id, {option: 'upVote'}))
    }
  }
  handleVoteDown = (e) => {
    e.preventDefault()
    const { dispatch, post, dashboard } = this.props
    const {id} = post

    if (dashboard){
      dispatch(handleVotePost(id, {option: 'downVote'}))
    } else {
      dispatch(handleVoteCategoryPost(id, {option: 'downVote'}))
    }
  }
  render() {
    const { post } = this.props

    if (post === null) {
      return <p>Essa postagem não existe.</p>
    }

    const {
      id, author, category, commentCount, timestamp, title, voteScore
    } = post

    return(
      <div className='post'>
          <div className='post-info'>
            <Link to={`/${category}/${id}`}><p className='link'>Title: {title}</p></Link>
            <span>{formatDate(timestamp)}</span>
            <span>Author: {author}</span>
            <span>Total Comments: {commentCount}</span>
            <span>Score: {voteScore}</span>
            <span>Votação <button onClick={this.handleVoteUp}>Up</button>
                          <button onClick={this.handleVoteDown}>Down</button></span>
          </div>
      </div>
    )
  }
}

function mapStateToProps ({posts, categoryPosts}, { id, dashboard }) {
  if ( dashboard ) {
    return{
      dashboard,
      post: posts
        ? posts[id]
        : null
    }
  } else {
    return{
      dashboard,
      post: categoryPosts
        ? categoryPosts[id]
        : null
    }
  }
}

export default withRouter(connect(mapStateToProps)(Post))
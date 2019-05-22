import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Post extends Component {
  handleLike = (e) => {
    e.preventDefault()

    //To-do: dispatch Votação
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
          </div>
      </div>
    )
  }
}

function mapStateToProps ({posts}, { id }) {
  return{
    post: id
      ? posts[id]
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Post))
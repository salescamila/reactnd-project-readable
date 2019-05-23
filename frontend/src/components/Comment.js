import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Comment extends Component {
  handleLike = (e) => {
    e.preventDefault()

    //To-do: dispatch Votação
  }

  render() {
    const { comment } = this.props

    if (comment === null) {
      return <p>Essa comentário não existe.</p>
    }
    console.log('comentário...',this.props)
    const {
      id, author, body, deleted, parentDeleted, parentId, timestamp, voteScore
    } = comment

    return(
      <div className='tweet'>
          <div className='tweet-info'>
            <Link to={`/post/${parentId}`}><p className='link'>Postagem original</p></Link>
            <span>{formatDate(timestamp)}</span>
            <span>Author: {author}</span>
            <p>{body}</p>
            <span>Score: {voteScore}</span>
            <span>Votação Up/Down</span>
          </div>
      </div>
    )
  }
}

function mapStateToProps ({comments}, { id }) {
  return{
    comment: comments
      ? comments[id]
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Comment))
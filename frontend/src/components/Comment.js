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
    const { comment, postId } = this.props

    if (comment === null) {
      return <p>Essa comentário não existe.</p>
    }
    console.log('comentário props...',this.props)
    const {
      author, body, deleted, parentDeleted, parentId, timestamp, voteScore
    } = comment

    if ( (postId === parentId) && (!deleted) && (!parentDeleted) ){
      return (
        <div className='tweet'>
          <div className='tweet-info'>
            <Link to={`/post/${parentId}`}><p className='link'>Postagem original</p></Link>
            <span>{formatDate(timestamp)}</span>
            <span>Author: {author}</span>
            <p>{body}</p>
            <span>Score: {voteScore}</span>
            <span>Votação ~> | Up | Down |</span>
            <span>| Editar | Remover |</span>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps ({comments}, { id, postId }) {
  return{
    comment: comments
      ? comments[id]
      : null,
    postId
  }
}

export default withRouter(connect(mapStateToProps)(Comment))
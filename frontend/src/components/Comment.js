import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { handleDeleteComment, handleVoteComment } from '../actions/comments'

class Comment extends Component {
  handleDelete = (e) => {
    e.preventDefault()
    const { dispatch, comment } = this.props
    const {id} = comment
    dispatch(handleDeleteComment(id))
  }
  handleVoteUp = (e) => {
    e.preventDefault()
    const { dispatch, comment } = this.props
    const {id} = comment
    dispatch(handleVoteComment(id, {option: 'upVote'}))
  }
  handleVoteDown = (e) => {
    e.preventDefault()
    const { dispatch, comment } = this.props
    const {id} = comment
    dispatch(handleVoteComment(id, {option: 'downVote'}))
  }
  render() {
    const { comment, postId } = this.props

    if (comment === null) {
      return <p>Essa comentário não existe.</p>
    }
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
            <span>Votação <button onClick={this.handleVoteUp}>Up</button>
                          <button onClick={this.handleVoteDown}>Down</button></span>
            <span>
              {/*<button onClick={this.handleEdit}>[Edit Comment]</button>*/}
              <button onClick={this.handleDelete}>Delete Comment</button>
            </span>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/singlePost'
import { formatDate } from '../utils/helpers'
import Comment from './Comment'
import NewComment from './NewComment'
import { handleDeletePost } from '../actions/posts'
import { handleVotePost } from '../actions/singlePost'
import { withRouter } from 'react-router-dom'

class PostPage extends Component {
  handleDelete = (e) => {
    e.preventDefault()

    const { dispatch, post } = this.props
    const {id} = post
    dispatch(handleDeletePost(id))
  }
  handleVoteUp = (e) => {
    e.preventDefault()
    const { dispatch, post } = this.props
    const {id} = post
    dispatch(handleVotePost(id, {option: 'upVote'}))
  }
  handleVoteDown = (e) => {
    e.preventDefault()
    const { dispatch, post } = this.props
    const {id} = post
    dispatch(handleVotePost(id, {option: 'downVote'}))
  }
  componentDidMount() {
    this.props.dispatch(getPost(this.props.postId));
  }
  render() {
    const { postId, post, commentsIds } = this.props

    if (post === null) {
      return null
    } else {
      const {
        id, author, body, commentCount, timestamp, title, voteScore
      } = post

      return (
        <div>
          <h3>Detalhes da Postagem</h3>
            <div className='tweet'>
              <div className='tweet-info'>
                <p>Title: {title}</p>
                <span>{formatDate(timestamp)}</span>
                <span>Author: {author}</span>
                <p>{body}</p>
                <span>Total Comments: {commentCount}</span>
                <span>Score: {voteScore}</span>
                <span>Votação <button onClick={this.handleVoteUp}>[Up]</button>
                              <button onClick={this.handleVoteDown}>[Down]</button></span>
                <span>
                  <button onClick={this.handleEdit}>[Edit Post]</button>
                  <button onClick={this.handleDelete}>[Delete Post]</button>
                </span>
              </div>
            </div>
            <br></br>
            <NewComment parentId={id} />
            <h3>Comentários</h3>
            {
              commentsIds === null
              ? null
              : commentsIds.map((id) => (
                  <Comment id={id} postId={postId}/>
                ))
            }
        </div>
      )
    }
  }
}

function mapStateToProps ( {singlePost, comments}, props ) {
  const { id } = props.match.params

  return{
    postId: id,
    post: singlePost
      ? singlePost
      : null,
    commentsIds: Object.keys(comments).sort((a,b) => comments[b].timestamp - comments[a].timestamp)
  }
}

export default withRouter(connect(mapStateToProps)(PostPage))
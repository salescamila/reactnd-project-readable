import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/singlePost'
import { formatDate } from '../utils/helpers'
import Comment from './Comment'
import NewComment from './NewComment'
import { handleDeletePost } from '../actions/posts'
import { handleVotePost } from '../actions/singlePost'
import { withRouter, Redirect } from 'react-router-dom'

class PostPage extends Component {
  state = {
    toHome: false
  }
  handleDelete = (e) => {
    e.preventDefault()
    const { dispatch, post } = this.props
    const {id} = post
    dispatch(handleDeletePost(id)).then(
      this.setState(() => ({toHome: true}))
    )
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
    const {toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }

    const { postId, post, commentsIds } = this.props
    console.log('propss', post.id )

    if (post.id === undefined) {
      return (<div>
                <h3 className="center">404: Post Not Found</h3>
              </div>)
    } else {
      const {
        id, author, body, commentCount, timestamp, title, voteScore
      } = post
      return (
        <div>
          <h3 className="center">Detalhes da Postagem</h3>
            <div className='post'>
              <div className='post-info'>
                <p>Title: {title}</p>
                <span>{formatDate(timestamp)}</span>
                <span>Author: {author}</span>
                <p>{body}</p>
                <span>Total Comments: {commentCount}</span>
                <span>Score: {voteScore}</span>
                <span>Votação <button onClick={this.handleVoteUp}>Up</button>
                              <button onClick={this.handleVoteDown}>Down</button></span>
                <span>
                  {<button onClick={this.handleEdit}>Edit Post</button>}
                  <button onClick={this.handleDelete}>Delete Post</button>
                </span>
              </div>
            </div>
            <br></br>
            <NewComment parentId={id} />
            <h3 className="center">Comentários</h3>
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
    post: singlePost,
      //? singlePost  : null,
    commentsIds: Object.keys(comments).sort((a,b) => comments[b].timestamp - comments[a].timestamp)
  }
}

export default withRouter(connect(mapStateToProps)(PostPage))
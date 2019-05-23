import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class PostPage extends Component {
  componentDidMount() {
    this.props.dispatch(getPost(this.props.id));
  }
  render() {
    //let idPost
    const { id, post, singlePost } = this.props

    if (post === null) {
      console.log('post filtrado 1...', this.props)
      return null
    } else {
      const {
        id, author, body, commentCount, timestamp, title, voteScore
      } = post
      console.log('post filtrado 2...', this.props)
    /*Object.keys(posts).map((p, i)=>(
      posts[p].id === id
      ? idPost = i
      : null
    ))*/

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
                <span>Votação ~> | Up | Down |</span>
                <span>| Editar | Remover |</span>
              </div>
            </div>

            {/*<NewPost id={id} />
            {replies.length !== 0 && <h3 className='center'>Replies</h3>}
            <ul>
              {replies.map((replyId) => (
                <li key={replyId}>
                  <Post id={replyId}/>
                </li>
              ))}
            </ul>
            */
          }
        </div>
      )
    }
  }
}

function mapStateToProps ( {posts, singlePost}, props ) {
  const { id } = props.match.params

  return{
    id: id,
    post: posts
      ? posts
      : null,
    singlePost: singlePost
      ? singlePost
      : null
   // posts: posts
  }
}

export default connect(mapStateToProps)(PostPage)
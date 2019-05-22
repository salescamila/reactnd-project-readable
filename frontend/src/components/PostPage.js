import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import Post from './Post'

class PostPage extends Component {
  componentDidMount() {
    this.props.dispatch(getPost(this.props.id));
  }
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <h3>Detalhes da Postagem</h3>
        {
        <Post id={id} />
        /*<NewPost id={id} />
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Post id={replyId}/>
            </li>
          ))}
        </ul>
        */}
      </div>
    )
  }
}

function mapStateToProps ( {posts}, props ) {
  const { id } = props.match.params

  return{
    id: posts.filter((p) => (p.id === id)),
    post: posts
  }
}

export default connect(mapStateToProps)(PostPage)


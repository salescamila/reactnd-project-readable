import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import NewPost from './NewPost'

class PostPage extends Component {
  render() {
    const { id, replies } = this.props
    return (
      <div>
        <Post id={id} />
        <NewPost id={id} />
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Post id={replyId}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect()(PostPage)

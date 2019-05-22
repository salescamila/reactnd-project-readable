import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class PostPage extends Component {
  render() {
    console.log('passou aqui... postagem')
    return (
      <div>
        <h3>Detalhes da Postagem</h3>
        {/*
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
        */}
      </div>
    )
  }
}

function mapStateToProps ( {posts} ) {
  return{
    posts
  }
}

export default withRouter(connect(mapStateToProps)(PostPage))


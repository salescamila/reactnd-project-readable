import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import { Redirect } from 'react-router-dom'

class NewComment extends Component {
  state = {
    body: '',
    author: '',
    toHome: false,
  }
  handleChangeBody = (e) => {
    const body = e.target.value
    this.setState(() => ({
      body
    }))
  }
  handleChangeAuthor = (e) => {
    const author = e.target.value
    this.setState(() => ({
      author
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { body, author } = this.state
    const { dispatch, parentId } = this.props

    dispatch(handleAddComment({body, author, parentId}))

    this.setState(() => ({
      body: '',
      author: '',
      toHome: parentId ? false : true,
    }))
  }
  render() {
    const { body, author, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    // {id, timestamp, body, author, parentId}
    return (
      <div>
        <h3 className='center'>Add New Comment</h3>
        <form className='new-post' onSubmit={this.handleSubmit}>
          Comment: <textarea value={body} onChange={this.handleChangeBody}
                  className='textarea' name='post' maxLength={500}/><br/>
          Author:<input value={author} onChange={this.handleChangeAuthor}
                  className='input' type='text' name='title' /><br/>
          <button
            className='btn'
            type='submit'
            disabled={body === '' || author === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewComment)
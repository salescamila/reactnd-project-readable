import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import { Redirect } from 'react-router-dom'

class NewComment extends Component {
  state = {
    body: '',
    toHome: false,
  }
  handleChangeBody = (e) => {
    const body = e.target.value
    this.setState(() => ({
      body
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { body } = this.state
    const { dispatch, parentId } = this.props

    dispatch(handleAddComment({body, parentId}))

    this.setState(() => ({
      body: '',
      toHome: parentId ? false : true,
    }))
  }
  render() {
    const { body, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    // {id, timestamp, body, author, parentId}
    return (
      <div>
        <h3 className='center'>Add New Comment</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          Comment: <textarea value={body} onChange={this.handleChangeBody}
                  className='textarea' name='post' maxLength={500}/><br/>
          <button
            className='btn'
            type='submit'
            disabled={body === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewComment)
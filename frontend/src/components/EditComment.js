import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleEditPost } from '../actions/posts'
import { getComment } from '../actions/comment'

class EditComment extends Component {
  state = {
    toHome: false,
    author: '',
    body: '',
  }
  componentDidMount() {
    this.props.dispatch(getComment(this.props.commentId)).then(
      this.setState(() => ({
        author: this.props.location.state.author,
        body: this.props.location.state.body
      }))
    )
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
    const { dispatch, id, commentId } = this.props

    dispatch(handleEditPost(commentId, {body}))

    this.setState(() => ({
      body: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { body, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Editar Postagem</h3>
        <form className='new-post' onSubmit={this.handleSubmit}>
          Post:<textarea
                  value={body}
                  onChange={this.handleChangeBody}
                  className='textarea'
                  name='post'
                  maxLength={500}/><br/>
          Author: {this.props.post.author}<br/>
          <button
            className='btn'
            type='submit'
            disabled={(body === '')}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}
function mapStateToProps ( {}, props ) {
  const { id } = props.match.params
  return{
    props,
    commentId: id
  }
}

export default withRouter(connect(mapStateToProps)(EditComment))
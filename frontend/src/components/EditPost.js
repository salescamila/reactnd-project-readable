import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleEditPost } from '../actions/posts'
import { getPost } from '../actions/singlePost'

class EditPost extends Component {
  state = {
    toHome: false,
    title: '',
    body: '',
  }
  componentDidMount() {
    this.props.dispatch(getPost(this.props.postId)).then(
      this.setState(() => ({
        title: this.props.location.state.title,
        body: this.props.location.state.body
      }))
    )
  }
  handleChangeTitle = (e) => {
    const title = e.target.value
    this.setState(() => ({
      title
    }))
  }
  handleChangeBody = (e) => {
    const body = e.target.value
    this.setState(() => ({
      body
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { title, body } = this.state
    const { dispatch, id, postId } = this.props

    dispatch(handleEditPost(postId, {title, body}))

    this.setState(() => ({
      title: '',
      body: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { title, body, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Editar Postagem</h3>
        <form className='new-post' onSubmit={this.handleSubmit}>
          Title:<input
                  value={title}
                  onChange={this.handleChangeTitle}
                  className='input'
                  type='text'
                  name='title' /><br/>
          Post:<textarea
                  value={body}
                  onChange={this.handleChangeBody}
                  className='textarea'
                  name='post'
                  maxLength={500}/><br/>
          Category: {this.props.post.category}<br/>
          Author: {this.props.post.author}<br/>
          <button
            className='btn'
            type='submit'
            disabled={(title === '' || body === '')}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}
function mapStateToProps ( {singlePost}, props ) {
  const { id } = props.match.params
  return{
    props,
    postId: id,
    post: singlePost
  }
}

export default withRouter(connect(mapStateToProps)(EditPost))
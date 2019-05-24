import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts'

class NewPost extends Component {
  state = {
    text: '',
    toHome: false,
    title: '',
    body: '',
    author: '',
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { post } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddPost(post, id))

    this.setState(() => ({
      text: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>Criar Nova Postagem</h3>
        <form>
          {
            //To-do: Formulário e tratamento do texto
          }
        </form>
      </div>
    )
  }
}

export default connect()(NewPost)
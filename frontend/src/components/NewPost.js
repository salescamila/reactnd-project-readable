import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts'

class NewPost extends Component {
  state = {
    toHome: false,
    title: '',
    body: '',
    category: '',
    author: '',
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
  handleChangeCategory = (e) => {
    const category = e.target.value
    this.setState(() => ({
      category
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

    const { title, body, category, author } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddPost({title, body, category, author}))

    this.setState(() => ({
      title: '',
      body: '',
      author: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { title, body, category, author, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Criar Nova Postagem</h3>
        <form className='new-post' onSubmit={this.handleSubmit}>
          Title:<input value={title} onChange={this.handleChangeTitle}
                  className='input' type='text' name='title' /><br/>
          Post:<textarea value={body} onChange={this.handleChangeBody}
                  className='textarea' name='post' maxLength={500}/><br/>
          Category:<select id='selectCat' className='select' onChange={this.handleChangeCategory}>
                    <option value=""></option>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="udacity">Udacity</option>
                   </select><br/>
          Author:<input value={author} onChange={this.handleChangeAuthor}
                  className='input' type='text' name='title' /><br/>
          <button
            className='btn'
            type='submit'
            disabled={(title === '' || body === '' || category === '' || author === '')}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewPost)
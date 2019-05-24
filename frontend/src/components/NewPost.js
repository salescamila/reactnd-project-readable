import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts'

class NewPost extends Component {
  state = {
    text: '',
    toHome: false,
    post:{
      id: '',
      timestamp: '',
      title: '',
      body: '',
      author: '',
      category: '',
    }
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
    const { text, toHome, post } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Criar Nova Postagem</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          Title:<input className='input' type='text' name='title' /><br/>
          Post:<textarea className='textarea' name='post' maxLength={500}/><br/>
          Category:<select className='select'>
                     <option value="react">React</option>
                     <option value="redux">Redux</option>
                   </select><br/>

          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewPost)
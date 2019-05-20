import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
  state = {
    text: '',
    toHome: false,
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }

  //To-do: HandleSubmit here

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
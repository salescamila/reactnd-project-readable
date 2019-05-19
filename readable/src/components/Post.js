import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Post extends Component {
  handleLike = (e) => {
    e.preventDefault()

    //To-do: dispatch Votação
  }

  render() {
    const { post } = this.props

    if (post === null) {
      return <p>Essa postagem não existe.</p>
    }

    return(
      <div>
        <h1>Project Readable</h1>
        <h2>Título</h2>
        <h3>Autor</h3>
        <p>Número de Comentários</p>
        <p>Pontuação</p>
        <p>Votação Up/Down</p>
        <p>Detalhes</p>
      </div>
    )
  }
}

export default withRouter(connect()(Post))
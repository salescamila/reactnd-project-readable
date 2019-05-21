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
    const {
      title, author, voteScore
    } = post

    console.warn(post);

    return(
      <div>
        <span>{title}</span>
        <p>{author}</p>
        <p>Número de Comentários: {voteScore}</p>
        <p>Votação Up/Down</p>
      </div>
    )
  }
}

export default withRouter(connect()(Post))
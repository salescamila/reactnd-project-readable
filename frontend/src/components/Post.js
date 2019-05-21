import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

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
      id, author, commentCount, timestamp, title, voteScore
    } = post

    return(
      <div>
        <p>Title: {title}</p>
        <Link to={`/post/${id}`}>Mais informações</Link>
        <div>{formatDate(timestamp)}</div>
        <p>Author: {author}</p>
        <p>Total Comments: {commentCount}</p>
        <p>Score: {voteScore}</p>
        <p>Votação Up/Down</p>
        <br></br>
      </div>
    )
  }
}

function mapStateToProps ({posts}, { id }) {
  return{
    post: id
      ? posts[id]
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Post))
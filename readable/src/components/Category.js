import React, { Component } from 'react'
import { connect } from 'react-redux'
//import Post from './Post'
//import NewPost from './NewPost'

class Category extends Component {
  render() {
    return (
      <div>
        <h3><u>Lista de Categorias das Postagens.</u></h3>
        <ul>
            <li key='0'>
            Teste de categoria
            </li>
        </ul>
      </div>
    )
  }
}
/*
function mapStateToProps ({ authedUser, tweets, users }, props) {
  const { id } = props.match.params

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
  }
}
*/
export default connect()(Category)
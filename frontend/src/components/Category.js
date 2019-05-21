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

        {console.log(this.props)}
      </div>
    )
  }
}

function mapStateToProps ( { props }) {
  return {
    categories: props
  }
}

export default connect(mapStateToProps)(Category)

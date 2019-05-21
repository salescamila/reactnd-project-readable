import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
//import Post from './Post'
//import NewPost from './NewPost'

class Category extends Component {
  render() {
    const { categories } = this.props.categories
    if (categories === null) {
      return <p>Não existem categorias cadastradas.</p>
    }

    console.log('Categorias: ', categories)
    return (
      <div>
        <h3><u>Lista de Categorias das Postagens.</u></h3>
        <ul>
            <li key={0}>
            {/*<Link to={`/category/${cats.path}`}>{cats.name}</Link>*/}
            </li>
        </ul>

        {console.log(this.props)}
      </div>
    )
  }
}

function mapStateToProps ({categories}) {
  return{
    categories
  }
}

export default withRouter(connect(mapStateToProps)(Category))


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const { categories } = this.props.cats
    if (categories === null) {
      return <p>Não existem categorias cadastradas.</p>
    }

    return (
      <div>
        <h3>Lista de Categorias das Postagens.</h3>
        <ul className='link'>
            {categories
              ? categories.map((c, i) => { 
                return <li key={i}><Link to={`/category/${c.path}`}>{c.name}</Link></li> 
                })
              : null
            } 
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    cats: categories
  }
}

export default connect(mapStateToProps)(Category)
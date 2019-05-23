import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/categories';

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {
    const { categories } = this.props.categories

    if (categories === null) {
      return <div>Não existem categorias cadastradas.</div>
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
    categories: categories
      ? categories
      : null
  }
}

export default connect(mapStateToProps)(Category)
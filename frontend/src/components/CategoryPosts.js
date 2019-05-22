import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class CategoryPosts extends Component {
  render() {
    console.log('passou aqui... categoria')
    return (
      <div>
        <h3>Postagens na Categoria __name_here__</h3>
      </div>
    )
  }
}

function mapStateToProps ( {posts} ) {
  return{
    posts
  }
}

export default withRouter(connect(mapStateToProps)(CategoryPosts))


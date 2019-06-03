import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategoryPosts } from '../actions/categoryPosts'
import { orderBy } from '../actions/order'
import Post from './Post'

class CategoryPosts extends Component {
  componentDidMount() {
    this.props.dispatch(getCategoryPosts(this.props.match.params.category))
  }
  orderByTimestamp = () => {
    this.props.dispatch(orderBy('timestamp'))
  }
  orderByScore = () => {
    this.props.dispatch(orderBy('score'))
  }
  render() {
    const { category } =  this.props.match.params
    return (
      <div>
        <h3 className='center'>Postagens na Categoria {category}</h3>
        <div className='center'>
          <button
            className='btn'
            type='button'
            onClick={this.orderByTimestamp}>
            Order By Date
          </button>
          <button
            className='btn'
            type='button'
            onClick={this.orderByScore}>
            Order By Vote Score
          </button>
        </div>
        { this.props.postsIds === null
          ? <div>Sem postagens ainda...</div>
          : this.props.postsIds.map((id) => (
              this.props.posts[id].category === this.props.match.params.category
              ? <Post id={id} dashboard={false}/>
              : null
          ))
        }
      </div>
    )
  }
}
function mapStateToProps ({ categoryPosts, order }, { props }) {
  return {
    props,
    posts: categoryPosts
      ? categoryPosts
      : null,
    postsIds: order.order === 'score'
      ? Object.keys(categoryPosts).sort((a,b) => categoryPosts[b].voteScore - categoryPosts[a].voteScore)
      : Object.keys(categoryPosts).sort((a,b) => categoryPosts[b].timestamp - categoryPosts[a].timestamp)
  }
}
/*
function mapStateToProps ( {categoryPosts}, {props} ) {
  return{
    posts: categoryPosts
      ? categoryPosts
      : null,
    postsIds: Object.keys(categoryPosts).sort((a,b) => categoryPosts[b].voteScore - categoryPosts[a].voteScore),
    props
  }
}*/

export default connect(mapStateToProps)(CategoryPosts)

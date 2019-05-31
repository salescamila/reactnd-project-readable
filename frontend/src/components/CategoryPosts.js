import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategoryPosts } from '../actions/categoryPosts';
import Post from './Post'

class CategoryPosts extends Component {
  state = {
    orderBy: 'data',
    postsIds: null,
  }
  componentDidMount() {
    this.props.dispatch(getCategoryPosts(this.props.match.params.category))
  }
  orderByDate = () => {
    if (this.props.posts !== null) {
      this.setState(() => ({
        orderBy: 'date',
        postsIds: Object.keys(this.props.posts).sort((a,b) => this.props.posts[b].timestamp - this.props.posts[a].timestamp)
      }))
    }
  }
  orderByScore = () => {
    if (this.props.posts !== null) {
      this.setState(() => ({
        orderBy: 'score',
        postsIds: Object.keys(this.props.posts).sort((a,b) => this.props.posts[b].voteScore - this.props.posts[a].voteScore)
      }))
    }
  }
  render() {
    const { category } =  this.props.match.params

    if(this.state.postsIds === null) {
      this.orderByDate()
    }

    return (
      <div>
        <h3>Postagens na Categoria {category}</h3>
        {/*<div>Select a order to show the posts...</div>
        <button
          disabled='true'
          className='btn'
          type='button'
          onClick={this.orderByDate}>
          Order By Date
        </button>
        <button
          disabled='true'
          className='btn'
          type='button'
          onClick={this.orderByScore}>
          Order By Vote Score
        </button>*/}
        { this.props.postsIds === null
          ? <div>Sem postagens ainda...</div>
          : this.props.postsIds.map((id) => (
              this.props.posts[id].category === this.props.match.params.category
              ? <Post id={id} dashboard={false}/>
              : null
          ))
        }
        {/*
          this.state.postsIds === null
          ? <div>Select Ordernation</div>
          : this.state.postsIds.map((id) => (
              <Post id={id} dashboard={false}/>
            ))
        */}
      </div>
    )
  }
}

function mapStateToProps ( {categoryPosts}, {props} ) {
    return{
    posts: categoryPosts
      ? categoryPosts
      : null,
    postsIds: Object.keys(categoryPosts).sort((a,b) => categoryPosts[b].voteScore - categoryPosts[a].voteScore),
    props
  }
}

export default connect(mapStateToProps)(CategoryPosts)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import Post from './Post'

class Dashboard extends Component {
  state = {
    orderBy: 'data',
    postsIds: null,
  }
  componentDidMount() {
    this.props.dispatch(getPosts())
    this.orderByDate()
  }
  orderByDate = () => {
    if (this.props.posts !== null) {
      this.setState(() => ({
        orderBy: 'date',
        postsIds: Object.keys(this.props.posts).sort((a,b) => this.props.posts[b].timestamp - this.props.posts[a].timestamp)
      }))
      console.log('postsIDS...',this.state.postsIds)
      /*this.state.postsIds.map((id) => (
        <Post post={this.state.postsIds[id]}/>
      ))

      Object.keys(posts).map((p, i)=>(
        posts[p].id === id
        ? idPost = i
        : null
      ))*/
    }
  }
  orderByScore = () => {
    if (this.props.posts !== null) {
      this.setState(() => ({
        orderBy: 'score',
        postsIds: Object.keys(this.props.posts).sort((a,b) => this.props.posts[b].voteScore - this.props.posts[a].voteScore)
      }))
      console.log('postsIDS...',this.state.postsIds)
    }
  }
  render () {
    if(this.state.postsIds === null) {
      this.orderByDate()
    }
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <div>Select a order to show the posts...</div>
        <button
          className='btn'
          type='button'
          onClick={this.orderByDate}>
          Order By Date
        </button>
        <button
          className='btn'
          type='button'
          onClick={this.orderByScore}>
          Order By Vote Score
        </button>
        {
          this.state.postsIds === null
          ? <div>Select Ordernation</div>
          : this.state.postsIds.map((id) => (
              <Post id={id} dashboard={true}/>
            ))
        }
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: posts
     ? posts
     : null
  }
}

export default connect(mapStateToProps)(Dashboard)
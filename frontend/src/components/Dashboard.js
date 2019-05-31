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
  render () {
    /*if(this.state.postsIds === null) {
      this.orderByScore()
    }*/
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
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
        {
          this.state.postsIds === null
          ? this.props.postsIds.map((id) => (
              <Post id={id} dashboard={true}/>
             ))
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
      : null,
    postsIds: Object.keys(posts).sort((a,b) => posts[b].voteScore - posts[a].voteScore)
  }
}

export default connect(mapStateToProps)(Dashboard)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import { orderBy } from '../actions/order'
import Post from './Post'

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  orderByTimestamp = () => {
    this.props.dispatch(orderBy('timestamp'))
  }
  orderByScore = () => {
    this.props.dispatch(orderBy('score'))
  }
  render () {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
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

        {
          this.props.postsIds.map((id) => (
            <Post id={id} dashboard={true}/>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps ({ posts, order }) {
  return {
    posts: posts
      ? posts
      : null,
    postsIds: order.order === 'score'
      ? Object.keys(posts).sort((a,b) => posts[b].voteScore - posts[a].voteScore)
      : Object.keys(posts).sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
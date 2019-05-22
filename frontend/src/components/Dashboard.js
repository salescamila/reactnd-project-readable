import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
  state = {
    orderByData: true,
  }

  render () {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        {this.props.postsIds.map((id) => (
          <Post id={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  
  console.log('ordernação... ', this.state)
  return {
    postsIds: 
      Object.keys(posts)
      .sort((a,b) => posts[b].voteScore - posts[a].voteScore)
      /*orderByData
      ? Object.keys(posts)
        .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
      : Object.keys(posts)
        .sort((a,b) => posts[b].voteScore - posts[a].voteScore)
      */
  }
}

export default connect(mapStateToProps)(Dashboard)
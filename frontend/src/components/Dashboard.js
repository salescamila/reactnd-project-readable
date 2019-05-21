import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
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
  return {
    postsIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
  render () {

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
          {this.props.postIds}

          { this.props.postIds.map((post, i) => (
            <li key={i}>
              algo aqui {post}
              {console.log(post)}
            </li>
          ))}
                  
          <Post />
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    postIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
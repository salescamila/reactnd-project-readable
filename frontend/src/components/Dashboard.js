import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
  render () {

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>

          {/*this.props.posts.map((post, i) => (
            <li key={i}>
              {console.log(post)}
            </li>
          ))*/}
                  
          <Post id='0'/>
      </div>
    )
  }
}
/*
function mapStateToProps ({ posts }) {
  return {
    postIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}
*/

export default connect()(Dashboard)
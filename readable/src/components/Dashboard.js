import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
  render () {

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          <li key='0'>
            <Post id='0'/>
          </li>
        </ul>
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
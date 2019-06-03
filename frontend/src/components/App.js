import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewPost from './NewPost'
import PostPage from './PostPage'
import CategoryPosts from './CategoryPosts'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                 <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/newPost' exact component={NewPost} />
                    <Route path='/:category/:id' exact component={PostPage} />
                    <Route path='/:category' exact component={CategoryPosts} />
                  </Switch>
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}


function mapStateToProps ({ posts }) {
  return {
    loading: posts === null
  }
}


export default connect(mapStateToProps)(App)
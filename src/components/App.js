import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true 
              ? <h3 style={{textAlign: 'center', transition: 'linear'}}>loading...</h3> 
              : <div>
                <Switch>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/tweet/:id' component={TweetPage}/>
                  <Route path='/new' component={NewTweet}/>
                  <Route component={PageNotFound}/>
                </Switch>
              </div> }
          </div>
        </Fragment>
      </Router>
      
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
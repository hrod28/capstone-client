'use strict';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={landingContainer} />
          <Route path="/feed" component={postsFeed} />
          <Route path="/newPost" component={newPostForm} />
          <Route path="/profile" component={profileContainer} />
          <Route path="/myProfile" component={editProfileContainer} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;

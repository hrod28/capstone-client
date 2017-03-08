'use strict';
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Chef Challenge for Children</h1>
        <p>Eat Up, Vote, Party</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
  );
  }
}

export default HomePage;

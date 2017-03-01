import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Festival Planning Administration</h1>
        <p>Use this app to discover music</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
  );
  }
}

export default HomePage;

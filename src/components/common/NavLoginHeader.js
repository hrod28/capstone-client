'use strict';
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const NoHeader = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/admin-about" activeClassName="active">About</Link>
      {"  |  "}
      <Link to="/admin-stages" activeClassName="active">Stages</Link>
      {"  |  "}
      <Link to="/admin-musicians" activeClassName="active">Musicians</Link>
      {"  |  "}
      <Link to="/admin-schedules" activeClassName="active">Schedule</Link>
      {"  |  "}
      <Link to="/admin-workshops" activeClassName="active">Workshops</Link>
    </nav>
  );
};

export default NoHeader;

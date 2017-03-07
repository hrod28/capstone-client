'use strict';
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/about" activeClassName="active">About</Link>
      {"  |  "}
      <Link to="/stages" activeClassName="active">Stages</Link>
      {"  |  "}
      <Link to="/chefs" activeClassName="active">Chefs</Link>
      {"  |  "}
      <Link to="/schedules" activeClassName="active">Schedule</Link>
    </nav>
  );
};

export default Header;

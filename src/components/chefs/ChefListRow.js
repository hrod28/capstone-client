
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ChefListRow = ({chef}) => {
  return (
    <tr>
      <td><Link to={'/chef/' + chef.id}>{chef.name}</Link></td>
      <td>{chef.about}</td>
      <td>{chef.restaurant}</td>
      <td>{chef.favorite_dish}</td>
      <td>{chef.quote}</td>
    </tr>
  );
};

ChefListRow.propTypes = {
  chef: PropTypes.object.isRequired
};

export default ChefListRow;

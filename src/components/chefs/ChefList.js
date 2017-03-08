import React, {PropTypes} from 'react';
import ChefListRow from './ChefListRow';

const ChefList = ({chefs}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>About</th>
        <th>restaurant</th>
        <th>favorite_dish</th>
        <th>quote</th>
      </tr>
    </thead>
    <tbody>
      {chefs.map(chef =>
        <ChefListRow key={chef.id} chef={chef}/>
      )}
      </tbody>
    </table>
  );
};

ChefList.propTypes = {
  chefs: PropTypes.array.isRequired
};

export default ChefList;

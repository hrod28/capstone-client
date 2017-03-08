'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as chefActions from '../../actions/chefActions';

class ChefProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      chef: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const chef = this.state.chef;
    chef.title = event.target.value;
    this.setState({chef: chef});
  }

  onClickSave(){
    this.props.dispatch(chefActions.createChef(this.state.chef));
  }

  chefRow(chef, index) {
    return <div key={index}>{chef.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>This Year's Participating Chefs:</h1>
        {this.props.chefs.map(this.chefRow)}
        <h2>Add or Edit Chef Profile</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.chef.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

ChefProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chefs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    chefs: state.chefs
  };
}

export default connect(mapStateToProps)(ChefProfilePage);

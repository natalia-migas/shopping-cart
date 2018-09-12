import React, { Component } from 'react';
import Products from '../products/Products';
import { connect } from 'react-redux';
import OptionsPanel from './OptionsPanel';

class Dashboard extends Component {
  render() {
    const { sortingType } = this.props.sorting;
    return (
      <React.Fragment>
        <OptionsPanel />
        <Products sort={sortingType} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sorting: state.sorting
});

export default connect(mapStateToProps)(Dashboard);

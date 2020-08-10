import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';

const mapStateToProps = state => {
  return {
    shop: state.shop
  };
};

export default connect(
  mapStateToProps
)(BookList);
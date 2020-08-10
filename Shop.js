import React, { Component } from 'react';
import Search from './containers/Search';
import BookList from './containers/BookList';

class Shop extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <br/>
            <h2 className="d-block p-3 bg-secondary text-white">Book Shop</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8">
            <Search/>
          </div>
        </div>
        <BookList/>
      </div>
    );
  }
}

export default Shop;
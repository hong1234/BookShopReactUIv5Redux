
import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
      filterText: ''
    }

    handleChange = (event) => this.setState({
        filterText: event.target.value
    })

    handleSubmit = (event) => {
        const searchTerm = this.state.filterText;
        this.props.onSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        const {filterText} = this.state;

        return (
          <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
            <input type="text" value={filterText} onChange={this.handleChange} className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success"><b>Search</b></button>
          </div>
        </form>
        );

    }

}

export default SearchBar;
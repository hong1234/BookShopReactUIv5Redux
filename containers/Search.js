import { connect } from 'react-redux';
import { searchBooks } from '../actions/index';
import SearchBar from '../components/SearchBar';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (searchTerm) => {
      dispatch(searchBooks(searchTerm));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
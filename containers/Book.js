import { connect } from 'react-redux';
import { addBook } from '../actions/index';
import Book from '../components/Book';

const mapDispatchToProps = dispatch => {
  return {
    addBook: (book) => {
        dispatch(addBook(book));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Book);
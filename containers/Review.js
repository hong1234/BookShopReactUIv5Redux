import { connect } from 'react-redux';
import { addReview } from '../actions/index';
import Review from '../components/Review';

const mapDispatchToProps = dispatch => {
  return {
    addReview: (bookId, review) => {
      dispatch(addReview(bookId, review));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Review);
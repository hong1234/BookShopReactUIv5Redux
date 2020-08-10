import { FETCH_DATA, ADD_REVIEW, ADD_BOOK, SHOW_BOOK, REVIEW_FORM } from '../actions/types';

const initState = {
  books: [],
  currentBook: -1,
  bookDetail: false,
  reviewForm: false
};
// reducer for state.shop data-field
export default function shopReducer(shop=initState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, shop, {
        books: action.data,
        currentBook: -1,
        bookDetail: false,
        reviewForm: false
      });

    case SHOW_BOOK:
      return Object.assign({}, shop, {
        currentBook: action.currentBook,
        bookDetail: action.bookDetail,
        reviewForm: action.reviewForm
      })
      
    case ADD_REVIEW:
      const elementsIndex = shop.books.findIndex(book => book.id == action.bid);
      shop.books[elementsIndex].reviews.push(action.review);
      return {
        ...shop
      };

    case ADD_BOOK:
      shop.books.push(action.book);
      return {
        ...shop
      };

      case REVIEW_FORM:
        return Object.assign({}, shop, {
          reviewForm: action.reviewForm
        })

    //case DELETE_REVIEW:
    //  return state.filter(post => post.id !== action.payload.id);

    default:
      //return shop;
      return {
        ...shop
      };
  }
}
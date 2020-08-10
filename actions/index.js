import { ADD_REVIEW, ADD_BOOK, FETCH_DATA } from './types';
import axios from 'axios';

//const apiUrl = 'http://localhost:8000/api/books/search?title=';

const apiUrl = 'http://localhost:8000/api/books';

// export const deletePostSuccess = id => {
//   return {
//     type: DELETE_POST,
//     payload: {
//       id
//     }
//   }
// }

// export const deletePost = id => {
//   return (dispatch) => {
//     return axios.delete(`${apiUrl}/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(id))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

////////////

export const fetchBooks = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const searchBooks = (searchTerm) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/search?title=${searchTerm}`)
      .then(response => {
        dispatch(fetchBooks(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const addReviewSuccess = (bookId, review) => {
  return {
    type: ADD_REVIEW,
    bid: bookId,
    review: review
  }
};

export const addReview = (bookId, review) => {
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };
  return (dispatch) => {
    return axios.post(`${apiUrl}/${bookId}/reviews`, review, options) //axios.post(`${apiUrl}`, {title, body})
      .then(response => {
        dispatch(addReviewSuccess(bookId, response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const addBookSuccess = (book) => {
  return {
    type: ADD_BOOK,
    book
  }
};

export const addBook = (book) => {

  const options = {
    headers: { 'Content-Type': 'application/json' }
  };

  return (dispatch) => {
    return axios.post(`${apiUrl}`, book, options)
    .then(response => {
      dispatch(addBookSuccess(response.data))
    })
    .catch(error => {
      throw(error);
    });
  };

};
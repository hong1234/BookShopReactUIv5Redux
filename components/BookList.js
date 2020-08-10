import React, { Component } from 'react';
import ReviewForm from '../containers/Review.js';
import { SHOW_BOOK, REVIEW_FORM } from '../actions/types';

class BookList extends Component {
   
    showBook = (current) => {
      const action = {
        type: SHOW_BOOK,
        bookDetail: true,
        reviewForm: false,
        currentBook: current
      }
      this.props.dispatch(action);
    }

    showReviewForm = () => {
      const action = {
        type: REVIEW_FORM,
        reviewForm: true
      }
      this.props.dispatch(action);
    }

    hideReviewForm = () => {
      const action = {
        type: REVIEW_FORM,
        reviewForm: false
      }
      this.props.dispatch(action);
    }

    render() { 

        const { books, bookDetail, reviewForm, currentBook } = this.props.shop;

        let search_result = <div></div>;
        let item_detail = <div></div>;
        let review_form = <div></div>;

        if (books.length>0) {
          search_result = <List books = {books} showBook={this.showBook} />;
        }
        if (bookDetail) {
          item_detail = <Detail book={books[currentBook]} showReviewForm={this.showReviewForm} /> ;
        }
        if (reviewForm) {
          review_form = <ReviewForm bookId={books[currentBook].id} hideReviewForm={this.hideReviewForm}/> ;
        }

        return (
          <div className="row">
             <div className="col-xs-12 col-sm-12 col-md-4">
                { search_result }<br/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                { item_detail }<br/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                { review_form }<br/>
              </div>  
          </div>
        );
    }
    
}

const List = ({books, showBook}) => <div>
  <div className="d-block p-2 bg-secondary text-white"><h5>Books</h5></div>
  <div className="list-group">
    { books.map((item, i) => <button key = {i} id={item.id} type="button" onClick={() => showBook(i)} className="list-group-item list-group-item-action">{item.title}</button>) }
  </div>
</div>

const Detail = ({ book, showReviewForm }) => <div>
  <div className="card text-white bg-success mb-3">
    <div className="card-header">Detail</div>
    <div className="card-body">
       <h5 className="card-title">Title : {book.title}</h5>
       <p className="card-text">Content : {book.content}</p>
       <button type="button" onClick={showReviewForm} className="btn btn-secondary">Add Review</button>
       <h5 className="card-text">Reviews :</h5>
       {book.reviews.map((item, i) =><p key = {i} id={item.id} className="">{item.email} - {item.content}</p>)}
    </div>
  </div>
</div>

export default BookList;


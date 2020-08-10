import React, { Component } from 'react';

export default class Review extends Component {

  state = {
    name: '',
    email: '',
    content: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.name.trim() !== '' && this.state.email.trim() !== '' && this.state.content.trim() !== ''){
      const bookId = this.props.bookId;
      const review = {
        name: this.state.name,
        email: this.state.email,
        content: this.state.content
      };

      this.props.addReview(bookId, review);
      this.props.hideReviewForm();
    } 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Your Name:</label>
                <input type="text" className="form-control" name="name" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
                <label>Your Email:</label>
                <input type="text" className="form-control" name="email" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
                <label>Your Review:</label>
                <input type="text" className="form-control" name="content" onChange={this.handleInputChange} />
            </div>
            <button  type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
  
}

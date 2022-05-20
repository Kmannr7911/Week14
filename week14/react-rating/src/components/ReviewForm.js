import prodParams from "jshint/src/prod-params";
import React, { Component } from "react";
import { ReactDOM } from 'react-dom/client';

class ReviewForm extends Component{  
  constructor(props) {
    super();
    this.props = props;
  }
  
  showForm = () => {
    return (
        <form>
          <label>Review form</label>
          <input></input>
        </form>
    );
  }


  render(){
    const input = 'hard coded'; // todo: dynamically retrieve value of <input> from form
    return (
      <div className="Submit">
        <div className="button-container">
        {this.showForm()}
        </div>  
        <button onClick={() => this.props.setReviews(input)}>Submit</button>
      </div>
    );
  }
}
  
export default ReviewForm;
import React, {Component} from 'react';

class Debit extends Component {
  render() {
   return (
        <div>
            <div>Description: {this.props.description}</div>
            <div>Amount: ${this.props.amount}</div>
            <div>Date: {this.props.date}</div>
            <hr />
       </div>
    );
  }
}

export default Debit;
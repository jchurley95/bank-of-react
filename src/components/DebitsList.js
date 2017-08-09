import React, {Component} from 'react';
import Debit from './Debit';
import {Link} from 'react-router-dom';

class DebitsList extends Component {
  render() {
    const debits = this.props.debits;

   const debitsComponent = debits.map( (debit, index) => {
        return <Debit 
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            key={index}
            keyId={index} />
    });

   return (
        <div>
            <h1>DEBITS</h1>
            <div>Account Balance: ${this.props.accountBalance}</div>
            <br />
            <h2>New Debit</h2>
            <form onSubmit="">
                <input placeholder='Description' type="text"/><br />
                <input placeholder='Amount' type="text"/> <br />
                <input value='New Debit' type="Submit"/>
            </form>
            <br />
            {debitsComponent}
           
            <Link to="/userProfile">User Profile</Link> <br />
            <Link to='/credits'>Credits</Link> <br />
            <Link to="/">Home</Link>
       </div>
    );
  }
}

export default DebitsList;
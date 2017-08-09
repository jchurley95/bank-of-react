import React, {Component} from 'react';
import Credit from './Credit';
import {Link} from 'react-router-dom';


class CreditsList extends Component {
  render() {
    const credits = this.props.credits;

   const creditsComponent = credits.map( (credit, index) => {
        return <Credit 
            description={credit.description}
            amount={credit.amount}
            date={credit.date}
            key={index}
            keyId={index} />
    });

   return (
        <div>
            <h1>Credits</h1>
            <div>Account Balance: ${this.props.accountBalance}</div>
            <br />
            <h2>New Credit</h2>
            <form>
                <input placeholder='Description' type="text"/><br />
                <input placeholder='Amount' type="text"/> <br />
                <input value='New Credit' type="Submit"/>
            </form>
            <br />
            {creditsComponent}
            
            <Link to="/userProfile">User Profile</Link> <br />
            <Link to='/debits'>Debits</Link> <br />
            <Link to="/">Home</Link>
       </div>
    );
  }
}

export default CreditsList;
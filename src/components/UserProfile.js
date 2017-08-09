import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div className="App">
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <Link to='/debits'>Debits</Link> <br />
                <Link to='/credits'>Credits</Link> <br />
                <Link to="/">Home</Link>
                
            </div>
        );
    }
}

export default UserProfile;
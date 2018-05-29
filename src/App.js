import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from './reducers/user';
import './App.css';

class App extends Component {
  fetchMe = () => {
    this.props.getUser('lubinetskn');
  };

  render() {
    const { userStatus, user } = this.props;

    if (userStatus === 'loading') {
      return 'Loading...';
    }

    if (userStatus === 'failure') {
      return 'Error :(';
    }

    return (
      <div className="app">
        {user && user.name}
        {!user && <button onClick={this.fetchMe}> login! </button>}
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({
    user: user.entity,
    userStatus: user.status,
    userErrors: user.error,
  }),
  { getUser }
)(App);

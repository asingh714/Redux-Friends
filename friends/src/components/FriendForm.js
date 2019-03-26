import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

// import { addFriend } from '../actions';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      email: '',
      age: ''
    }
  };

  handleChanges = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend).then(() => {
      this.props.history.push('/protected');
    });
    this.setState({
      friends: {
        name: '',
        email: '',
        age: ''
      }
    });
  };

  render() {
    return (
      <div className="friend-form">
        <h2>Add New Friend 🦸‍♀️🦸‍♂️</h2>
        <form className="form" onSubmit={this.addFriend}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Josh Knell"
            onChange={this.handleChanges}
            value={this.state.friend.name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="josh@lambdaschool.com"
            onChange={this.handleChanges}
            value={this.state.friend.email}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="85"
            onChange={this.handleChanges}
            value={this.state.friend.age}
          />
          <div className="flex-spacer" />

          <button>
            {this.props.addingFriend ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Add Friend'
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ }) => ({
  
});

export default connect(
  mapStateToProps,
  { }
)(FriendForm);

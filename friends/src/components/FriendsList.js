import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from 'react-loader-spinner';

import { getData } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    if (this.props.fetchingFriends)
      return <Loader type="Puff" color="#59dab8" height="100" width="100" />;
    return (
      <div className="friends">
        <h2>Friends 🦸‍♀️🦸‍♂️</h2>
        {this.props.friends.map(friend => (
          <div className="friend-card">
            <i
              class="fas fa-times"
              onClick={() => this.deleteFriend(friend.id)}
            />
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            {this.props.deletingFriend &&
              this.state.deletingFriendId === friend.id && (
                <p>Deleting Friend 👋</p>
              )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends,
  fetchingFriends
})


export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);

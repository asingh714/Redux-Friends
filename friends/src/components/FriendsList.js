import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

import { getData, deleteFriends } from "../actions";

import EditForm from "./EditFrom";

class FriendsList extends React.Component {
  state = {
    deletingFriendId: null,
    editingFriendId: null
  };

  componentDidMount() {
    this.props.getData();
  }

  deleteFriend = id => {
    this.setState({ deletingFriendId: id });
    this.props.deleteFriends(id);
  };

  render() {
    if (this.props.fetchingFriends)
      return (
        <div className="friends" style={{ paddingTop: "36px" }}>
          <Loader type="Puff" color="#ffffff" height="100" width="100" />
        </div>
      );
    return (
      <div className="friends">
        <h2>Friends 🦸‍♀️🦸‍♂️</h2>
        {this.props.friends.map(friend => {
          if (this.state.editingFriendId === friend.id) {
            return (
              <div className="friend-card">
                <EditForm
                  friend={friend}
                  editFriend={this.editFriend}
                  editingFriend={this.props.editingFriend}
                />
              </div>
            );
          }
          return (
            <div className="friend-card">
              <i
                class="fas fa-pencil-alt"
                onClick={() => this.setState({ editingFriendId: friend.id })}
              />
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
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends, deletingFriend }) => ({
  friends,
  fetchingFriends,
  deletingFriend
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, deleteFriends }
  )(FriendsList)
);

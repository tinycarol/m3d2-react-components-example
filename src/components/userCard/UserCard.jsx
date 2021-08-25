import React from "react";
import "./UserCard.css";

export default class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="UserCard">
        <img src={user.avatar} alt="" />
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
      </div>
    );
  }
}

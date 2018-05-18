// /src/users/Users.js

import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user._id}>
            <b>{user.setup}</b>
            <br />
            {user.punchline}
            <hr />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = event => {
    const token = localStorage.getItem("token");

    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => {
        this.props.history.push("/signin");
      });
  };
}

export default Users;

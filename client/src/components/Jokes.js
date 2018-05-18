import React from "react";
import axios from "axios";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <hr />
        {this.state.jokes.map(joke => (
          <div key={joke._id}>
            <b>{joke.setup}</b>
            <br />
            {joke.punchline}
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
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        this.props.history.push("/signin");
      });
  };
}

export default Jokes;

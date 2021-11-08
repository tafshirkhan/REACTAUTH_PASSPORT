import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/login", data)
      .then((response) => {
        //console.log(response);
        localStorage.setItem("token", response.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
      });
  };
  render() {
    //After login redirect to profile
    if (this.state.loggedIn) {
      return <Redirect to={"/profile"} />;
    }
    //Show error mesage
    let error = "";
    if (this.state.message) {
      error = (
        <div>
          <div class="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        </div>
      ); //end error
    }
    return (
      <div>
        <br />
        <div class="row">
          <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Login Here</h3>

            <form onSubmit={this.formSubmit}>
              {error}
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <button type="submit" class="btn btn-primary btn btn-block">
                Login
              </button>
              <br />
              Forget Password <Link to="/forget">Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

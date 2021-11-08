import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Forget extends Component {
  state = {
    email: "",
    message: "",
  };

  formSubmit = () => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post("/forgetpassword", data)
      .then((response) => {
        //console.log(response);
        this.setState({ message: response.data.message });
        document.getElementById("forgetform").reset();
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ message: error.response.data.message });
      });
  };
  render() {
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
            <h3 class="text-center">Forget Password</h3>

            <form onSubmit={this.formSubmit} id="forgetform">
              {error}
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary btn btn-block">
                Forget Password
              </button>
              <br />
              Dont have account? <Link to="/register">Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;

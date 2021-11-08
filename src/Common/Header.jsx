import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Forget from "../Components/Forget";
import Reset from "../Components/Reset";
import Profile from "../Components/Profile";
import axios from "axios";

class Header extends Component {
  state = {
    user: {},
  };

  //This method will execute first than all others wil execute
  componentDidMount() {
    axios
      .get("/userinfo")
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //set the user data
  setUser = (user) => {
    //pass all the user data into user state
    this.setState({ user: user });
  };
  render() {
    return (
      <div>
        <Router>
          <Nav
            //acces the user state
            user={this.state.user}
            //using this get all the user data
            setUser={this.setUser}
          />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/login"
              component={() => (
                <Login user={this.state.user} setUser={this.setUser} />
              )}
            ></Route>
            <Route
              exact
              path="/register"
              component={() => (
                <Register user={this.state.user} setUser={this.setUser} />
              )}
            ></Route>
            <Route exact path="/forget" component={Forget}></Route>
            <Route exact path="/reset/:id" component={Reset}></Route>

            <Route
              exact
              path="/profile"
              component={() => <Profile user={this.state.user} />}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;

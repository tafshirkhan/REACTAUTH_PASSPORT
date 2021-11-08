import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class Nav extends Component {
  state = {
    loggesout: "",
  };
  logOut = () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    let button;
    let profile;
    if (localStorage.getItem("token")) {
      button = (
        <div>
          <Link class="nav-link" to="/" onClick={this.logOut}>
            Logout
          </Link>
        </div>
      );
      profile = (
        <div>
          <Link class="nav-link active" to="/profile">
            Profile
          </Link>
        </div>
      );
    } else {
      button = (
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/login">
                Login
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              AUTHENTICATION
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <Link class="nav-link active" to="/profile">
                    Profile
                  </Link> */}
                  {profile}
                </li>

                <li class="nav-item"></li>
              </ul>
              <span class="navbar-text">
                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </ul> */}
                {button}
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

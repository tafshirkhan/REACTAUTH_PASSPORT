import React, { Component } from "react";

class Profile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }
    return (
      <div>
        <br />
        <div class="row">
          <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">User Profile</h3>
            <ul class="list-group">
              <li class="list-group-item">Name: {name}</li>
              <li class="list-group-item">Email: {email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

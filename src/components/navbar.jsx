import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const LoggedInView = props => {
  if(!props.currentUser) {
    return(
      <ul class="navbar-nav">
        <li class="nav-item nav-btn">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    )
  }
  return null
}

const LoggedOutView = props => {
  if(props.currentUser) {
    return(

      <ul class="navbar-nav">
        <li class="nav-item nav-btn">
          <a class="nav-link" href="#">Admin Console</a>
        </li>
      </ul>
    )
  }
  return null
}

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }

        this.logout = this.logout.bind(this)

    }

    logout(e) {
        e.preventDefault();
        // userService.logout();
        this.props.history.push("/")
    }

 
    render() {
        const { user } = this.state
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img src="https://sabinarya.com/wp-content/uploads/2019/04/Sabin_Tejarat-Aria-Vsmall.png" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

            <LoggedOutView currentUser={this.props.currentUser} />

            <LoggedInView currentUser={this.props.currentUser} />


            </div>
          </nav>
        );
    }
}

export default NavBar;
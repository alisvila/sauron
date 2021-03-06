import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.jpeg';

const LoggedInView = props => {
  if(!props.currentUser) {
    return(
      <div class="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="btn-finno more-btn" href="/login">Login</a>
        </li>
      </ul>
      </div>
    )
  }
  return null
}

const LoggedOutView = props => {
  if(props.currentUser) {
    return(

      <ul className="navbar-nav">
        <li className="nav-item nav-btn">
          <a className="nav-link" href="#">Admin Console</a>
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
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
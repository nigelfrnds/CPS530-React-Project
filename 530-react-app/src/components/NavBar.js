import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { textStyle } = styles;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div>
          <div className="navbar-header">
            <a href="/" className="navbar-brand">React-Project</a>
          </div>
          <ul className="nav navbar-nav">
            <li style={textStyle}>
              <a href="/summary">Summary</a>
            </li>
            <li style={textStyle}>
              <a href="/install">Install</a>
            </li>
            <li style={textStyle}>
              <a href="/tutorial">Tutorial</a>
            </li>
            <li style={textStyle}>
              <a href="/result">Result</a>
            </li>
            <li style={textStyle}>
              <a href="/conclusion">Conclusion</a>
            </li>
            <li style={textStyle}>
              <a href="/credits">Credits</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: '15px',
  },
};


export default NavBar;

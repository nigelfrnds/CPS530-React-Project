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
            <Link to="/" className="navbar-brand">React-Project</Link>
          </div>
          <ul className="nav navbar-nav">
            <li style={textStyle}>
              <Link to="/summary">Summary</Link>
            </li>
            <li style={textStyle}>
              <Link to="/install">Install</Link>
            </li>
            <li style={textStyle}>
              <Link to="/tutorial">Tutorial</Link>
            </li>
            <li style={textStyle}>
              <Link to="/result">Result</Link>
            </li>
            <li style={textStyle}>
              <Link to="/conclusion">Conclusion</Link>
            </li>
            <li style={textStyle}>
              <Link to="/credits">Credits</Link>
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

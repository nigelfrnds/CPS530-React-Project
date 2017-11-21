import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { textStyle } = styles;
    return (
      <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand"><strong><img style={{width:'20px', height:'20px'}} align="left" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="react-logo"/><a style={{color:'#60D7F7', fontSize: '20px'}}>React</a></strong></Link>
          </div>
          <div className="collapse navbar-collapse" id="collapsible">
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

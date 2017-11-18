import React, { Component } from 'react';

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
            <a href="/" className="navbar-brand">React-Project</a>
          </div>
          <div className="collapse navbar-collapse" id="collapsible">
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

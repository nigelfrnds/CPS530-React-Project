import React, { Component } from 'react';

class TutorialPage extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <div>
          <h3>{`What We're Building:`}</h3>
          <p>
            {
              `We're building a simple Grocery List Application.`
            }
          </p>
        </div>
      </div>
    );
  }
}

export { TutorialPage };

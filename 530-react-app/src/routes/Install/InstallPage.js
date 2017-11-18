import React, { Component } from 'react';
import Install from './components/Install';
import NodeAndNpm from './components/NodeAndNpm';
import Installation from './components/Installation';

class InstallPage extends Component {
  render() {
    return (
      <div className="content">
      
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      <NodeAndNpm />
      <Installation />
      <Install id="creating-a-new-application" />
      </div>
    );
  }
}

export { InstallPage };

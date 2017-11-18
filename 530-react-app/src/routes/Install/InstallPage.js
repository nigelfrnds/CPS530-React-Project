import React, { Component } from 'react';
import Install from './components/Install';
import NodeAndNpm from './components/NodeAndNpm';
import Installation from './components/Installation';
import AddNew from './components/AddNew';

class InstallPage extends Component {
  render() {
    return (
      <div className="content">
        <NodeAndNpm />
        <Installation />
        <Install id="creating-a-new-application"/>
        <AddNew id="adding-to-existing-application" />
      </div>
    );
  }
}

export { InstallPage };

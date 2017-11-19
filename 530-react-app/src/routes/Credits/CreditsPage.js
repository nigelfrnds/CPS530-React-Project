import React, { Component } from 'react';

import Summary from './components/Summary';
import Install from './components/Install';
import Tutorial from './components/Tutorial';
import Conclusion from './components/Conclusion';
import Credits from './components/Credits';

class CreditsPage extends Component {
  render() {
    return (
      <div className="content">
        <Summary />
        <Install />
        <Tutorial />
        <Conclusion />
        <Credits />
      </div>
    );
  }
}

export { CreditsPage };

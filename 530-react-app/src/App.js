import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  SummaryPage,
  InstallPage,
  TutorialPage,
  ResultPage,
  ConclusionPage,
  CreditsPage,
} from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/summary">Summary</Link></li>
            <li><Link to="/install">Install</Link></li>
            <li><Link to="/tutorial">Tutorial</Link></li>
            <li><Link to="/result">Result</Link></li>
            <li><Link to="/conclusion">Conclusion</Link></li>
            <li><Link to="/credits">Credits</Link></li>
          </ul>
          <hr />
          <Route exact path="/summary" component={SummaryPage} />
          <Route path="/install" component={InstallPage} />
          <Route path="/tutorial" component={TutorialPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/conclusion" component={ConclusionPage} />
          <Route path="/credits" component={CreditsPage} />
        </div>
      </Router>
    );
  }
}

export default App;

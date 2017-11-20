import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  SummaryPage,
  InstallPage,
  TutorialPage,
  ResultPage,
  ConclusionPage,
  CreditsPage,
} from './routes';

import NavBar from './components/NavBar';

class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/summary" component={SummaryPage} />
            <Route path="/install" component={InstallPage} />
            <Route path="/tutorial" component={TutorialPage} />
            <Route path="/result" component={ResultPage} />
            <Route path="/conclusion" component={ConclusionPage} />
            <Route path="/credits" component={CreditsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="content Title">
        Welcome to our Presentation!
      </div>
    );
  }
}

export default Content;

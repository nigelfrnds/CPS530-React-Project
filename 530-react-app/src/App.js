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

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.fontStyle}>
          <div>
            <NavBar />
          </div>
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
      <div className="container-fluid content">
        This is the homepage.
      </div>
    );
  }
}

const styles = {
  navBar: {
    marginTop: '52px',
  },
  fontStyle: {
    fontFamily: 'Roboto, sans-serif',
  },
};

export default App;

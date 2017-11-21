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
<div style={{backgroundColor: '#282C34', height: '250px'}}>
<link rel="stylesheet" type="text/css" href="csshake.css" />

            <div className="text-center" style={{backgroundColor: '#282C34'}}>
              <h1 style={{fontFamily: 'Roboto', color: '#60D7F7', fontSize:'100px'}}> <strong>REACT</strong></h1>
              <h2 style={{fontFamily: 'Roboto', color: 'white', fontSize:'30px'}}> A JavaScript library for building user interfaces</h2> <br/>
              <a className="shake-freeze" style={{backgroundColor: '#60D7F7', padding: '15px 20px', border: 'none', color: 'black', fontSize: '15px'}} href='/summary'>Get Started</a>
            </div>


<br/><br/><br/>


            <div className="panel panel-warning" style={{borderColor: '#282C34'}}>
              <div className="panel-heading text-center" style={{backgroundColor: '#282C34'}}>
                <h1 style={{fontFamily: 'Roboto', color:'white'}}><strong>CPS530 - Term Project</strong></h1>
              </div>
          <div className="text-center">
      <br/>

      <strong>Subject</strong>: Presentation and Website tutorial of a web application framework, content management framework, or content management system.
    <br/>
    <br/>

<strong>Teams: Saad Iqbal, Nigel Fernandes, Jared Rand, Malcolm Gomes, and Tenzin Kenken</strong>
    <br/>  <br/>

Pick a framework or CMS of your choice (list below - one framework/CMS per team - will be on a first claimed basis). You create a website that presents the framework/CMS in a concise fashion as a tutorial.
    <br/>  <br/>

Your website shall have 6 pages, all done using the framework/CMS of your choice. Following are the requirements for each of the six pages.
    <br/>  <br/>

<a href="/summary"><strong>Page 1</strong></a>. A summary snapshot presentation of the Framework/CMS: Popularity, strengths, weaknesses, which developers mostly use it and for what kind of websites. Specify if it is backend, or frontend, or both. That page must be publicly available for your classmates to study for the final exam and will be considered required readings for all. A copy of it (may even be a pdf snapshot) can be hosted on a different host if your original page is not permanently and/or globally accessible.
    <br/>  <br/>

<a href="/install"><strong>Page 2</strong></a>. A tutorial showing in short simple steps how to install the framework/CMS on your chosen platform. The chosen platform can be the Ryerson server (you may have to ask support from the sys admins for specific installations), outside commercial hosting (can be shared hosting or a VPS like Digital Ocean), or to set your own server on your own machine (must have permanant connection!).
    <br/>  <br/>

<a href="/tutorial"><strong>Page 3</strong></a>. A short tutorial showing how to create a great looking page with text, images, and styles using your chosen Framework/CMS. The subject of your page is entirely yours.
    <br/>  <br/>

<a href="/result"><strong>Page 4</strong></a>. The actual page that is the result of step #3.
    <br/>  <br/>

<a href="/conclusion"><strong>Page 5</strong></a>. The conclusion. Rate your experience with the framework/CMS that you chose. Did it perform to your expectations? Was it difficult to install or configure? Was it easy the create the page with it? Was the learning curve steep compared with regular HTML/CSS? Would you have done things differently in retrospect? Did you regret your choice of framework/CMS?
    <br/>  <br/>

<a href="/credits"><strong>Page 6</strong></a>. A credits page. Identify the team members (with pictures if possible) and mention the different members responsibilities. Also mention references here if non original material was used.
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      </div>






          </div>

</div>
    );
  }
}

export default Content;

import React from 'react';

const NodeAndNpm = (props) => (
<div>
<div className="panel panel-info text-center" style={{borderColor: '#282C34'}}>

<div className="panel-heading" style={{backgroundColor: '#282C34'}}>
  <h1 style={{fontFamily: 'Poiret One, cursive', color:'white'}}><strong>Node and NPM</strong></h1>
</div>

<p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
  <br/>
  Getting React up and running is not as simple as downloading one large piece of software. You will need to install many, smaller software packages.
  <br />
  One of the main packages you need to download are <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/"><mark>npm</mark></a> and <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/about/"><mark>node</mark></a>.
  <br /><br />
  <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/"> Install NPM and Node </a>
</p>
</div>
</div>
);

export default NodeAndNpm;

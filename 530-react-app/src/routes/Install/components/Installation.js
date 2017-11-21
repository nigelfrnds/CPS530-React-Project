import React from 'react';

const Installation = (props) => (
  <div>
    <div className="panel panel-info text-center" style={{borderColor: '#282C34'}}>
      <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" />
    <div className="panel-heading" style={{backgroundColor: '#282C34'}}>
      <h1 style={{fontFamily: 'Poiret One, cursive', color:'white'}}><strong>Installation</strong></h1>
    </div>
    <p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
            <br/>
            React is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.
            <br/>
            <br/>
        <a className="btn btn-link" href="#creating-a-new-application"><b>Create a New React Application</b></a><br/>
        <a className="btn btn-link" href="#adding-to-existing-application"><b>Add React to an existing application</b></a>
    </p>



    </div>

    <br />
  </div>
);

export default Installation;

import React from 'react';

const Credits = (props) => (
<div>
<div class="panel panel-info text-center" style={{borderColor: '#282C34'}}>

<div class="panel-heading" style={{backgroundColor: '#282C34', color:'white'}}>
  <h1>Malcolm Gomes</h1>
</div>
<p style={{ fontSize: '20px' }}>
  <br/>
  <img style={{height: '200px', borderRadius: '8px' }} src={require('../malcolm.jpg')} alt="profil_pic"/>
  <br /> <br />
  Worked on Credits Page
  <br />
</p>
</div>
</div>
);

export default Credits;

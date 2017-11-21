import React from 'react';

const Summary = (props) => (
<div>
<div class="panel panel-info text-center" style={{borderColor: '#282C34'}}>

<div class="panel-heading" style={{backgroundColor: '#282C34', color:'white'}}>
  <h1>Jared Rand</h1>
</div>
<p style={{ fontSize: '20px' }}>
  <br/>
  <img style={{height: '200px', borderRadius: '8px' }} src={require('../jared.jpg')} alt="profil_pic"/>
  <br/> <br />
  Helped create styling for webpages. <br/>
  Worked on Summary Page
  <br />
</p>
</div>
</div>
);

export default Summary;

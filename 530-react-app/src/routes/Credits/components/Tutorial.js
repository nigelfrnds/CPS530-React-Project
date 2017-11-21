import React from 'react';

const Tutorial = (props) => (
<div>
<div class="panel panel-info text-center" style={{borderColor: '#282C34'}}>

<div class="panel-heading" style={{backgroundColor: '#282C34', color:'white'}}>
  <h1>Nigel Fernandes</h1>
</div>
<p style={{ fontSize: '20px' }}>
  <br/>
  <img style={{height: '200px', borderRadius: '8px' }} src={require('../nigel.jpg')} alt="profil_pic"/>
  <br/> <br/>
  Hosted and set up routes <br/>
  Worked on Tutorial and Results Page

  <br />

</p>
</div>
</div>
);

export default Tutorial;

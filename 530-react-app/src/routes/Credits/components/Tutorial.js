import React from 'react';

const Tutorial = (props) => (
<div>
<div class="panel panel-info text-center">

<div class="panel-heading">
  <h1 style={{fontFamily: 'Poiret One, cursive'}}>Tutorial Page</h1>
</div>
<p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
  <br/>
  Nigel Fernandes
  <br />
  <img style={{height: '200px'}} src={require('../nigel.jpg')} />
</p>
</div>
</div>
);

export default Tutorial;

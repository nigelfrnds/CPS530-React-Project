import React from 'react';

const Summary = (props) => (
<div>
<div class="panel panel-info text-center">

<div class="panel-heading">
  <h1 style={{fontFamily: 'Poiret One, cursive'}}>Summary Page</h1>
</div>
<p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
  <br/>
  Jared Rand
  <br />
  <img style={{height: '200px'}} src={require('../jared.jpg')} />
</p>
</div>
</div>
);

export default Summary;

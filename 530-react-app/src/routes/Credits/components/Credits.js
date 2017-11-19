import React from 'react';

const Credits = (props) => (
<div>
<div class="panel panel-info text-center">

<div class="panel-heading">
  <h1 style={{fontFamily: 'Poiret One, cursive'}}>Credits</h1>
</div>
<p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
  <br/>
  Malcolm Gomes
  <br />
  <img style={{height: '200px'}} src={require('../malcolm.jpg')} />
</p>
</div>
</div>
);

export default Credits;

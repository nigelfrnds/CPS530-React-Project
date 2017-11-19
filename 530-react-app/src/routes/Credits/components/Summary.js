import React from 'react';

const Summary = (props) => (
<div>
<div class="panel panel-info text-center">

<div class="panel-heading">
  <h1 style={{fontFamily: 'Poiret One, cursive'}}>Jared Rand</h1>
</div>
<p style={{ fontSize: '15px', fontFamily: 'Raleway'}}>
  <br/>
  <img style={{height: '200px'}} src={require('../jared.jpg')} />
  <br/> <br />
  Helped create styling for webpages. <br/>
  Worked on Summary Page
  <br />
</p>
</div>
</div>
);

export default Summary;

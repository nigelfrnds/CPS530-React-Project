import React, { Component } from 'react';

class ConclusionPage extends Component {
  render() {
    return (
      <div className="content">
            <div>
            <h1 className ="Title">CONCLUSION </h1>
            </div>
            <div class="container">
          <div class="panel-group">
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Rate your experience with the framework/CMS that you chose.</div>
              <div class="panel-body">I would rate the experience I had with the React framework a 4/5. Using the framwork itself was
              similar to what we've done in object oriented langauges that we've learned before & it uses JavaScript. </div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Did it perform to your expectations? </div>
              <div class="panel-body">Using the framework had many instructions online and it was flexible and easy to use. It provided
              us with many options for styling and different ways for us to develop our site.</div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Was it difficult to install or configure?</div>
              <div class="panel-body">No, installing react was fairly simple using a few commands. You do need to install Node JS beforehand
               However, configuring the page and trying to host it took more time than we thought. However, once we figured out what to do, all
               we had to do was configure it and host it.</div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Was it easy the create the page with it? Was the learning curve steep compared with regular HTML/CSS?</div>
              <div class="panel-body">It took a fair amount of work to create the page using the react Framwork. It is a bit more difficult to use
              compared to HTML and CSS because the react framework uses JavaScript. We had elements of HTML and CSS in the file but using
              primarly JavaScript and working with objects, it is more difficult to use compared to HTML and CSS.</div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Would you have done things differently in retrospect? </div>
              <div class="panel-body">In retrospect, we should have gotten together and built the entire thing together and got everyone to look at
              each page because it would have helped keeping everything looking similar.</div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading" style={styles.theme}>Did you regret your choice of framwork/CMS? </div>
              <div class="panel-body">No, I do not regret my choice of framework. </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  theme: {
    backgroundColor: '#ADD8E6',
  }
};

export { ConclusionPage };

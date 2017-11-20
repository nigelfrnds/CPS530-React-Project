import React, { Component } from 'react';
import TweetDeckTut from './components/TweetDeckTut';
import TweetTut from './components/TweetTut';
class TutorialPage extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <div>
            <h2>{`What We're Gonna Build`}</h2>
          </div>
          <div>
            <p style={{ fontSize: '15px', }}>
              {
                `We're gonna build an application to render our own version of Tweets using 2 React Components:`
              }
              <ul>
                <li><b>TweetDeck.js</b></li>
                <li><b>Tweet.js</b></li>
              </ul>
            </p>
          </div>
          <TweetDeckTut />
          <TweetTut />
          <br />
        </div>
      </div>
    );
  }
}

export { TutorialPage };

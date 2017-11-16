import React, { Component } from 'react';
import TweetDeck from './components/TweetDeck';

class ResultPage extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <h1>This is the Result!</h1>
          <TweetDeck />
        </div>
      </div>
    );
  }
}

export { ResultPage };

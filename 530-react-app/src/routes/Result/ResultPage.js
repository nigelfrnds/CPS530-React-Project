import React, { Component } from 'react';
import TweetDeck from './components/TweetDeck';

class ResultPage extends Component {
  render() {
    return (
      <div className="content">
        <div style={styles.containerStyle}>
          <h1>This is the Result!</h1>
          <TweetDeck />
          <br />
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    margin: '0 auto',
  },
};

export { ResultPage };

import React, { Component } from 'react';
import TweetDeck from './components/TweetDeck';

class ResultPage extends Component {
  render() {
    return (
      <div className="content">
        <div className="panel panel-info" style={styles.containerStyle}>
          <div className="panel-heading text-center">
            <h1>This is the Result!</h1>
          </div>
          <div className="panel-body">
            <TweetDeck />
          </div>
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

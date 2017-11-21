import React, { Component } from 'react';
import TweetDeck from './components/TweetDeck';

class ResultPage extends Component {
  render() {
    return (
      <div className="content">
        <div className="panel panel-info" style={{borderColor: '#282C34'}}>
          <div className="panel-heading text-center" style={{backgroundColor: '#282C34'}}>
            <h1 style={{color:'white'}}>This is the Result!</h1>
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

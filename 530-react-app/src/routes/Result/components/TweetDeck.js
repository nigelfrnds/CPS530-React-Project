import React, { Component } from 'react';
import Tweet from './Tweet';
import USERS from '../constants/UserList.json';
import DEFAULT_IMAGE from './user.png';

class TweetDeck extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <div style={styles.titleStyle}>
          {"TweetDeck2.0"}
        </div>
        <br />
        <div style={styles.tweetContainerStyle}>
          {
            USERS.map((user,index) => {
              return (
                <div key={index} style={styles.padding}>
                  <Tweet
                    user={user}
                    image={DEFAULT_IMAGE}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '8px',
    padding: '25px',
  },
  titleStyle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tweetContainerStyle: {
    margin: '0 auto',
    position: 'relative',
  },
  padding: {
    padding: '10px',
  }
};


export default TweetDeck;

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
        <div>
          {
            USERS.map((user,index) => {
              return (
                <Tweet
                  user={user}
                  image={DEFAULT_IMAGE}
                />
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
    width: '25%',
    padding: '25px',
  },
  titleStyle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  }
};


export default TweetDeck;

export const Step1 = `import React, { Component } from 'react';`;
export const Step2 = `import Tweet from './Tweet';
import USERS from './UserList.json';
import DEFAULT_IMAGE from './user.png';`;
export const Step3 = `class TweetDeck extends Component {
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

export default TweetDeck;
`;

export const Step4 = `const styles = {
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
`;
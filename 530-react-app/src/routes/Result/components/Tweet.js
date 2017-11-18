import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    const { image, user } = this.props;
    const { name, handle, tweet }  = user;
    return (
      <div style={styles.containerStyle}>
        <div style={styles.headerContainerStyle}>
          <span>
            <img src={image} style={styles.imageStyle} alt={'Profile Pic'}/>
            <span style={styles.userContainerStyle}>
              <span>
                <b>{name + ' '}</b>
                {'@' + handle}
              </span>
            </span>
          </span>
        </div>
        <div style={styles.tweetContainerStyle}>
          {tweet}
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: '1px',
    borderStyle: 'solid',
    height: '125px',
    display: 'block',
    marginTop: '10px',
    marginBottom: '10px',
  },
  headerContainerStyle: {
    position: 'relative',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    height: '50px',
    backgroundColor: 'rgba(100,149,237,0.5)',
  },
  imageStyle: {
    position: 'relative',
    padding: '5px',
    width: '50px',
    height: '50px',
  },
  tweetContainerStyle: {
    position: 'relative',
    height: '60%',
    padding: '10px',
  },
  userContainerStyle: {
    position: 'relative',
    padding: '2px',
  },
};

export default Tweet;

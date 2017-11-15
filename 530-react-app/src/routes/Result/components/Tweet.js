import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <div style={styles.headerContainerStyle}>
          <span>
            <img src={this.props.image} style={styles.imageStyle}/>
            <span style={styles.userContainerStyle}>
              <span>
                <b>{`${this.props.user.name} `}</b>
                {` @${this.props.user.handle}`}
              </span>
            </span>
          </span>
        </div>
        <div style={styles.tweetContainerStyle}>
          {this.props.user.tweet}
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '300px',
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

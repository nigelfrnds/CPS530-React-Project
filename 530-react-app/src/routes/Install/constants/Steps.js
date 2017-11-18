export const Step1 = `$npm install -g create-react-app
$create-react-app my-app
$cd my-app
$npm start`;
export const Step2 = `npm install react react-dom
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

export const StepT2 = `class Tweet extends Component {
  render() {
    /* Will be passed a props of image and user, which is an object.
      user == { name: '', handle: '', tweet: '' }
    */
    const { image, user } = this.props;
    const { name, handle, tweet }  = user;
    return (
      <div>
      </div>
    );
  }
}

export default Tweet;
`;

export const StepT3 = `class Tweet extends Component {
  render() {
    const { image, user } = this.props;
    const { name, handle, tweet }  = user;
    return (
      <div style={styles.containerStyle}>
        <div style={styles.headerContainerStyle}>
          <span>
            <img src={image} style={styles.imageStyle}/>
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
}`;

export const StepT4 = `const styles = {
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

export default Tweet;`;

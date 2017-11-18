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

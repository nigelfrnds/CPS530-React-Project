import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from '../constants/Steps';

const TweetDeckTut = () => {
  return (
    <div className="panel panel-info">
      <div className="panel-heading text-center">
        <h2>TweetDeck</h2>
      </div>
      <div className="panel-body">
        <p style={styles.textStyle}>This component renders the tweets one by one, neatly inside a box container.</p>
        <ul>
          <li>
            <div>
              <p style={styles.textStyle}><b>Step 1:</b> Create a file called <b>TweetDeck.js</b>, and add this line to the top of your file.</p>
              <CodeBlock lang={'js'}>
                {Step1}
              </CodeBlock>
            </div>
          </li>
          <li>
            <div>
              <p style={styles.textStyle}><b>Step 2:</b> Next, {`we're`} gonna import a static list of users(<b>UserList.json</b>), a default image for the user(<b>user.png</b>),
              and a react {`component`}(<b>Tweet.js</b>) that {`we're`} gonna make next.
              </p>
              <CodeBlock lang={'js'}>
                {Step2}
              </CodeBlock>
            </div>
          </li>
          <li>
            <div>
              <p style={styles.textStyle}><b>Step 3:</b> Now, We can use these the imported data and elements to create the layout of the component.
              </p>
              <CodeBlock lang={'js'}>
                {Step3}
              </CodeBlock>
            </div>
          </li>
          <li>
            <div>
              <p style={styles.textStyle}><b>Step 4:</b> Add some styling, and boom {`we're`} done.</p>
              <CodeBlock lang={'js'}>
                {Step4}
              </CodeBlock>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  textStyle: {
    fontSize: '17px',
  },
};

export default TweetDeckTut;

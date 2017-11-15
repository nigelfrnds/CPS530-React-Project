import React, { Component } from 'react';
import CodeBlock from '../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from './constants/Steps';

class TutorialPage extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <div>
          <div>
            <h2>{`What We're Gonna Build`}</h2>
          </div>
          <div>
            <p style={{ fontSize: '15px', }}>
              {
                `We're gonna build an application to render our own version of Tweets using 2 React Components:`
              }
              <ul>
                <li><b>TweetDeck.js</b></li>
                <li><b>Tweet.js</b></li>
              </ul>
            </p>
          </div>
          <div>
            <h2>TweetDeck</h2>
            <p>This component renders the tweets one by one, neatly inside a box container.</p>
            <ul>
              <li>
                <div>
                  <p><b>Step 1:</b> Create a file called <b>TweetDeck.js</b>, and add this line to the top of your file.</p>
                  <CodeBlock>
                    {Step1}
                  </CodeBlock>
                  <p><b>Step 2:</b> Next, {`we're`} gonna import a list of users(<b>UserList.json</b>), a default image for the user(<b>user.png</b>),
                  and a react {`component`}(<b>Tweet.js</b>) that {`we're`} gonna make next.
                  </p>
                  <CodeBlock>
                    {Step2}
                  </CodeBlock>
                  <p><b>Step 3:</b> Next, {`we're`} gonna import a list of users(<b>UserList.json</b>), a default image for the user(<b>user.png</b>),
                  and a react {`component`}(<b>Tweet.js</b>) that {`we're`} gonna make next.
                  </p>
                  <CodeBlock>
                    {Step3}
                  </CodeBlock>
                  <p><b>Step 4:</b> Now, {`we're`} gonna add some styling.</p>
                  <CodeBlock>
                    {Step4}
                  </CodeBlock>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { TutorialPage };

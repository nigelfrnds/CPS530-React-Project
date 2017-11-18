import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from '../constants/Steps';

const TweetDeckTut = () => {
  return (
    <div>
      <h2>TweetDeck</h2>
      <p>This component renders the tweets one by one, neatly inside a box container.</p>
      <ul>
        <li>
          <div>
            <p><b>Step 1:</b> Create a file called <b>TweetDeck.js</b>, and add this line to the top of your file.</p>
            <CodeBlock lang={'js'}>
              {Step1}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 2:</b> Next, {`we're`} gonna import a static list of users(<b>UserList.json</b>), a default image for the user(<b>user.png</b>),
            and a react {`component`}(<b>Tweet.js</b>) that {`we're`} gonna make next.
            </p>
            <CodeBlock lang={'js'}>
              {Step2}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 3:</b> Now, We can use these the imported data and elements to create the layout of the component.
            </p>
            <CodeBlock lang={'js'}>
              {Step3}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 4:</b> Add some styling, and boom {`we're`} done.</p>
            <CodeBlock lang={'js'}>
              {Step4}
            </CodeBlock>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TweetDeckTut;

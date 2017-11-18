import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, StepT2, StepT3, StepT4 } from '../constants/Steps';

const TweetTut = () => {
  return (
    <div>
      <h2>Tweet</h2>
      <p>This component renders the actual tweet, with a nice layout.</p>
      <ul>
        <li>
          <div>
            <p><b>Step 1:</b> Create a file called <b>Tweet.js</b>, and add this line to the top of your file.</p>
            <CodeBlock>
              {Step1}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 2:</b> Next, {`We're`} gonna create a basic layout for the component, as well as extract values from the props.</p>
            <CodeBlock>
              {StepT2}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 3:</b> Now, {`We're`} gonna improve the layout, and add some styling to get a finished product.</p>
            <CodeBlock>
              {StepT3}
            </CodeBlock>
          </div>
        </li>
        <li>
          <div>
            <p><b>Step 4:</b> Finally, add some styling and {`we're`} done.</p>
            <CodeBlock>
              {StepT4}
            </CodeBlock>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TweetTut;
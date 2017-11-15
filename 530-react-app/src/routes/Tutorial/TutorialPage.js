import React, { Component } from 'react';
import CodeBlock from '../../components/CodeBlock';
import { Step1 } from './constants/Steps';

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
                `We're gonna build a simple Grocery List application using 3 React Components:`
              }
              <ul>
                <li><b>GroceryList</b></li>
                <li><b>ListContainer</b></li>
                <li><b>ListItem</b></li>
              </ul>
            </p>
          </div>
          <div>
            <h2>GroceryList</h2>
            <p>This component renders the complete grocery list application, and also handles user input.</p>
            <ul>
              <li>
                <div>
                  <p><b>Step 1:</b> Create a file called <b>GroceryList.js</b>, and add this line to the top of your file.</p>
                  <CodeBlock>
                    {Step1}
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

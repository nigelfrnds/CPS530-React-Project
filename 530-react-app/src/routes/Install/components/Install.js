import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from '../constants/Steps';


const Install = (props) => {
  return (
    <div id={props.id}>
      <div class="panel panel-info">
        <div class="panel-heading text-center">
      <h1 style={{fontFamily: 'Poiret One, cursive'}}>Creating a New React Application</h1>
    </div>
<div class="text-center">
<br/>
          <p>Alright, let's make a React app on your home computer! Where do you start?<br/><br/>
To begin, decide where you want to save your app, and what you want to name it. In the terminal, cd to wherever you want to save your app. Use mkdir to make a new directory with your app's name. cd into your new directory.
<br/><br/>
Once you've done all that, type this command into your terminal (ignore the $):
<CodeBlock>
  {Step1}
</CodeBlock>
<br/>
Once the prompts are done, use your favorite text editor to open all of the files in your project's root directory. You could do this with a terminal command such as <mark>atom or sublime</mark>. You will see that a new file named <mark>package.json</mark> has been created!

<br/>
<br/>
The command npm init automatically creates a new file named package.json. package.json contains metadata about your new project.
<br/><br/>
Soon, you will install more npm modules. package.json keeps track of the modules that you install. Other developers can look at your package.json file, easily install the same modules that you've installed, and run their own local versions of your project! This is fantastic for collaborating.</p>
          </div>
            <CodeBlock>
              {Step1}
            </CodeBlock>






    </div>
    </div>
  );
};

export default Install;

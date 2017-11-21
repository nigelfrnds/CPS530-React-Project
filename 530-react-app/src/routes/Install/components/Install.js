import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from '../constants/Steps';


const Install = (props) => {
  return (
    <div id={props.id}>
      <div className="panel panel-info" style={{borderColor: '#282C34'}}>
        <div className="panel-heading text-center" style={{backgroundColor: '#282C34'}}>
      <h1 style={{fontFamily: 'Poiret One, cursive' , color:'white'}}><strong>Creating a New React Application</strong></h1>
    </div>
<div className="text-center">
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

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want.
<br/><br/>It uses build tools like <a target="_blank" href="http://babeljs.io/">Babel</a> and <a target="_blank" href="https://webpack.js.org/">webpack</a> under the hood, but works with zero configuration.
<br/><br/>When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its <a target="_blank" href="https://github.com/facebookincubator/create-react-app#create-react-app-">README</a> and the <a target="_blank" href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">User Guide</a>.

<br/><br/>
</div>






    </div>
    </div>
  );
};

export default Install;

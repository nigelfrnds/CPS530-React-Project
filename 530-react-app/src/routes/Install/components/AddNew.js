import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { Step1, Step2, Step3, Step4 } from '../constants/Steps';


const AddNew = (props) => {
  return (
    <div id={props.id}>
      <div className="panel panel-info">
        <div className="panel-heading text-center">
      <h1 style={{fontFamily: 'Poiret One, cursive'}}>Adding React to an Existing Application</h1>
    </div>
<div className="text-center">
<br/>
          <p>



          You don’t need to rewrite your app to start using React.<br/>
          We recommend adding React to a small part of your application, such as an individual widget, so you can see if it works well for your use case.<br/><br/>
          While React can be used without a build pipeline, we recommend setting it up so you can be more productive. A modern build pipeline typically consists of:<br/><br/>
          <strong>
          A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.<br/><br/>
          A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.<br/><br/>
          A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.
        </strong>

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
<br/><br/><br/>
We recommend using <mark>Yarn</mark> or <mark>npm</mark> for managing front-end dependencies. If you’re new to package managers, <a target="_blank" href="https://yarnpkg.com/en/docs/getting-started">the Yarn documentation</a> is a good place to get started.
<br/><br/>
<strong> To install React with Yarn, run: </strong>
<CodeBlock>
  {Step3}
</CodeBlock>
<br/><br/>
<strong> To install React with Npm, run: </strong>
<CodeBlock>
  {Step2}
</CodeBlock>

</div>



    </div>
    </div>
  );
};

export default AddNew;

import React, { Component } from 'react';

class SummaryPage extends Component {
  doSomething = () => {
    const { history } = this.props;
    history.push("/conclusion?hello")
  }

  render() {
    return (
      <div class="panel panel-info">
        <div class="panel-heading text-center">
          <h1 style={{fontFamily: 'Poiret One, cursive'}}>React.js: A Summary Snapshot</h1>
        </div>
        <div class="text-center">
          <h2>What is React.js?</h2>
          <p>
            React.js is a JavaScript library created in 2011 by Jordan Walke and maintained by Facebook, Instagram, and a community of loyal developers. React.js is a front-end framework used to abstract the slow DOM of pure HTML with a state-based Virtual DOM. React also allows for reusable components and code reuse via React Native.
          </p>
        </div>
        <div class="text-center">
          <h2>How popular is React.js?</h2>
          <p>
            According to the <a href="https://github.com/facebook/react/wiki/">React GitHub Wiki Pages</a>, React is currently being used by <a href="https://github.com/facebook/react/wiki/sites-using-react">at least 882 different websites</a>. Its popularity is promoted by Facebook and Instagram, both of which rely on React.js for their User Interfaces.
          </p>
          <a href="https://github.com/facebook/react/wiki/sites-using-react">Source.</a>
        </div>
        <div class="text-center">
          <h2>What kind of websites use it?</h2>
          <p>
            React can technically be used on any sort of website, but most often used for web application that have many UI changes without page reloading, like Facebook, Instagram, and Khan Academy.
          </p>
          <a href="https://hashnode.com/post/what-are-some-popular-websites-that-use-reactjs-ciibz8fb8016nj3xto8stgu4e">Source.</a>
        </div>
        <div class="text-center">
          <h2>What are React's strengths?</h2>
          <div class="text-center">
            <p>
              Some of React's strengths include:
              <ul>
                <li>It functions relatively transparently,</li>
                <li>It's simple,</li>
                <li>It's highly scalable,</li>
                <li>It can be rendered server-side,</li>
                <li>Because it is state-based, it's easier to debug and more predictable,</li>
                <li>Because it is component-based, it allows developers to make complex UI's from many simple parts,</li>
                <li>JSX makes JavaScript code way more readable (which in turn is more maintainable),</li>
                <li>Since it's view layer, can work with any other framework like Angular.js, Backbone.js, Aurelia.js,</li>
                <li>It's quite fast,</li>
                <li>And it can be used natively to create apps via React Native (for greater code reuse).</li>
              </ul>
            </p>
            <div><a href="https://stackoverflow.com/questions/28442239/advantages-and-disadvantages-of-using-reactjs">Source.</a></div>
            <div><a href="https://www.codementor.io/chrisharrington/react-vs-angularjs-vs-knockoutjs-a-performance-comparison-85hwzepbz">Source.</a></div>
            <div><a href="http://www.c-sharpcorner.com/article/what-and-why-reactjs/">Source.</a></div>
          </div>
        </div>
        <div class="text-center">
          <h2>What are React's weaknesses?</h2>
          <div class="text-center">
            <p>
              Some of React's weaknesses include:
              <ul>
                <li>It's only view layer, so it has no functionality for backend calls (unlike AngularJS, for example),</li>
                <li>It's not the fastest framework on browsers like Safari,</li>
                <li>There was briefly some license controversy (but the license was changed in September 2017),</li>
                <li>React uses non-standard HTML, which can create security holes,</li>
                <li>And React mixes HTML and JavaScript (encouraging low modularity).</li>
              </ul>
            </p>
            <div><a href="https://stackoverflow.com/questions/28442239/advantages-and-disadvantages-of-using-reactjs">Source.</a></div>
            <div><a href="https://www.codementor.io/chrisharrington/react-vs-angularjs-vs-knockoutjs-a-performance-comparison-85hwzepbz">Source.</a></div>
            <div><a href="http://www.c-sharpcorner.com/article/what-and-why-reactjs/">Source.</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export { SummaryPage };

import React, { Component } from 'react';
import GroceryList from './components/GroceryList';

class ResultPage extends Component {
  render() {
    return (
      <div>
        <GroceryList title={"My List"}/>
      </div>
    );
  }
}

export { ResultPage };
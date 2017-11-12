import React, { Component } from 'react';

class SummaryPage extends Component {
  doSomething = () => {
    const { history } = this.props;
    history.push("/conclusion?hello")
  }

  render() {
    return (
      <div>
        This is the SummaryPage Page.
        <button onClick={this.doSomething}>press me</button>
      </div>
    );
  }
}

export { SummaryPage };

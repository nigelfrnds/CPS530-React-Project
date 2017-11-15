import React, { Component } from 'react';

class CodeBlock extends Component {
  render() {
    const { contentStyle, textStyle } = styles;
    return (
      <div>
          <pre className="prettyprint" style={contentStyle}>
            <code className="language-js">
              {this.props.children.toString()}
            </code>
          </pre>
      </div>
    );
  }
}

const styles = {
  contentStyle: {
    padding: '15px',
  },
  textStyle: {
    fontSize: '12px',
  }
};

export default CodeBlock;

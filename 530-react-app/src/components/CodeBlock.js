import React, { Component } from 'react';

class CodeBlock extends Component {
  render() {
    const { lang } = this.props;
    const { contentStyle } = styles;
    return (
      <div>
          <pre className="prettyprint" style={contentStyle}>
            <code className={`language-${lang}`}>
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
};

export default CodeBlock;

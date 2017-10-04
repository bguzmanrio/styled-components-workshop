import React, {Component} from 'react';

export class Code extends Component {
  componentDidMount () {
    const codes = document.querySelectorAll('pre code');
    codes.forEach((codeBlock) => {
      hljs.highlightBlock(codeBlock);
    });
  }

  render () {
    return (
      <pre>
        <code className='javascript'>{this.props.children}</code>
      </pre>
    );
  }
}

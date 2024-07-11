import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

// lang comes `undefined` (tested), thus hardcoding it to support `jsx` always
const CodeHighlighter = ({ lang, code }) => {
  return <SyntaxHighlighter language='jsx' style={darcula}>{code}</SyntaxHighlighter>
}

CodeHighlighter.displayName = 'CodeHighlighter'

export default CodeHighlighter

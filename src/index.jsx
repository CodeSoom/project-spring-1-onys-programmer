import React from 'react';
import ReactDom from 'react-dom';

console.log('Hello world!');

const element = (
  <div>
    <p>Hello, World!!! (by React)</p>
  </div>
);

ReactDom.render(element, document.getElementById('app'));

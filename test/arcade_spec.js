'use strict';


const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const App = require('../app/index.js');

describe('test the dom', () => {
  it('tests for components', () => {
    let componentNode = ReactDOM.findDOMNode(component);
    let component = TestUtils.renderIntoDocument( <App />);
    expect(textUtils.isCompositeComponent(arcades)).toBeTruthy();
  });
});

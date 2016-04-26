'use strict';

jest.unmock('../app/index.js');


var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ArcadeComponent = require('../app/index.js');

describe('test the dom', () => {
  it('tests for components', () => {
    const container = ReactDOM.findDOMNode(App);
    var app = TestUtils.renderIntoDocument( <App />);
    expect(textUtils.isCompositeComponent(arcade)).toBeTruthy();
  })
})

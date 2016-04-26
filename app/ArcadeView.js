'use strict';

var ArcadeView = React.createClass({
  PropTypes: {
    arcades: React.PropTypes.array.isRequired,
    newArc: React.PropTypes.object.isRequired,
  },
  render: function(){
    var arcadeItemElements = this.props.arcades
    .filter(function(arcade){return arcade.name})
    .map(function(arcade) {return React.createElement(ArcadeItem, arcade)})

    return (
      React.createElement('div', {className: 'ArcadeView'},
      React.createElement('h1', {className: 'ArcadeView-title'}, "Arcades"),
      React.createElement('ul',{className: 'ArcadeView-list'}, arcadeItemElements),
      React.createElement(SubmitForm, {
        arcades: this.props.newArc,
      })
    )
    )
  },
});

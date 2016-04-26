'use strict';

var SubmitForm = React.createClass({
  proTypes: {
    arcades: React.PropTypes.object.isRequired
  },
//   getInitialState: function() {
//   return {arcades: arcades};
// },
// handleChange: function(event) {
//   this.setState({name: event.arcades.name});
// },
// render: function() {
//    return (
//      <input
//        type="text"
//        name={this.arcades.name}
//        onChange={this.handleChange}
//      />
//    );
//  }
  render: function(){
    return(
      React.createElement('form', {className: 'ContactForm'},
      React.createElement('input', {
        type: 'text',
        placeholder: 'Name (required)',
        value: this.props.arcades.name,
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'location',
        value: this.props.arcades.location,
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'hours',
        value: this.props.arcades.hours,
      }),
      React.createElement('button', {type: 'submit'}, "Add Contact")
    )

  )},
});

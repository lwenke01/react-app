
'use strict';

var arcades = [
  { "key": 1,
    "name": "Lisa's Amazing Games",
    "location": "Capitol Hill",
    "hours": "Monday - Saturday 9am-5pm"

  },
  { "key": 2,
    "name": "Kat's Crazy Arcade",
    "location": "Queen Anne",
    "hours": "Monday - Saturday 9pm-2am"
  },
  { "key": 3,
    "name": "Get it Games",
    "location": "BellTown",
    "hours": "Monday - Wednesday 9pm-2am"
  }
];

//   React.createElement('form', {className: 'arcadeForm'},
//     React.createElement('input', {
//       type: 'text',
//       placeholder: 'Name',
//       value: this.props.arcades.name,
//     }),
//     React.createElement('input', {
//       type: 'text',
//       placeholder: 'Location',
//       value: this.props.arcades.location,
//     }),
//     React.createElement('input', {
//       type: 'text',
//       placeholder: 'Hours',
//       value: this.props.arcades.hours,
//     }),
//     React.createElement('button', {
//       type: 'submit'}, "Add Arcade")
//   )
// )
// },
var GetArcades = React.createClass({
  getInitialState: function (){
    return {
      arcades: arcades
    }
  },
  render: function (){
    return (
      <div>
        <h2>{this.props.name}</h2>
          <p><em>location:</em> {this.props.location}</p>
          <p><em>hours:</em> {this.props.hours}</p>
        <div></div>
        <button onClick={this.props.onClick}>Delete Me</button>
      </div>
    )
  },
})

// var updateApp = React.createClass({
//   updateArcade: function (arcade) {
//     arcade = this.state.arcades;
//     // arcade.name === this.state.name;
//     // arcade.location=== this.state.location;
//     // arcade.hours=== this.state.hours;
//     // this.state.arcades.splice(this.state.arcades.indexOf(arcade), 1);
//     this.setState({arcades: this.state.arcades});
//   },
//   getInitialState: function (){
//     return {
//       arcades: this.props.arcades
//     }
//   },
//   render: function (){
//     return (
//       <div>
//       {this.state.arcades.map(function (arcade){
//         return (
//
//             // <GetArcades onChange={that.updateArcade.bind(null, arcade)} name={arcade.name} location={arcade.location} hours={arcade.hours}></GetArcades>
//           <GetArcades={that.updateArcade.bind(arcades, arcade)} name={arcade.name} location={arcade.location} hours={arcade.hours}></GetArcades>
//         )
//       })
//       </div>
//
//       }
//     )
//   }
//
// })
var App = React.createClass({
  deleteArcade: function (arcade) {
    this.state.arcades.splice(this.state.arcades.indexOf(arcade), 1);
    this.setState({arcades: this.state.arcades});
  },
  getInitialState: function (){
    return {
      arcades: this.props.arcades.splice(0)
    }
  },
  render: function (){
    var that = this;
    return (
      <div>
      {this.state.arcades.map(function (arcade){
        return (

            // <GetArcades onChange={that.updateArcade.bind(null, arcade)} name={arcade.name} location={arcade.location} hours={arcade.hours}></GetArcades>
          <GetArcades onClick={that.deleteArcade.bind(null, arcade)} name={arcade.name} location={arcade.location} hours={arcade.hours}></GetArcades>
        )
      })}
      </div>
    )
  }
})
ReactDOM.render(<App arcades={arcades}></App>, document.body);

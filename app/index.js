
'use strict';

var arcades = [
  {
    "name": "Lisa's Amazing Games",
    "location": "Capitol Hill",
    "hours": "Monday - Saturday 9am-5pm"

  },
  {
    "name": "Kat's Crazy Arcade",
    "location": "Queen Anne",
    "hours": "Monday - Saturday 9pm-2am"
  },
  {
    "name": "Get it Games",
    "location": "BellTown",
    "hours": "Monday - Wednesday 9pm-2am"
  }
];

var GetArcades = React.createClass({
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
  }
})

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
          <GetArcades onClick={that.deleteArcade.bind(null, arcade)} name={arcade.name} location={arcade.location} hours={arcade.hours}></GetArcades>
        )
      })}
      </div>
    )
  }
})

ReactDOM.render(<App arcades={arcades}></App>, document.body);

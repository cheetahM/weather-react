var React = require('react');
var ReactRouter = require('react-router');
var getWeatherHelpers = require('../utils/getWeatherHelpers');

var Forecast = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true
    }
  },
  componentDidMount: function() {
    console.log('context',this.context);
    const city = this.context.router.params.city;
    if(this.context.router.params.city) {
      this.setState({
        isLoading:false
      });
      getWeatherHelpers.getWeatherInfo(city)
      .then(function(weather) {
        console.log(weather.data.city.name);
        console.log(weather.data.list.weather)
        console.log(weather.data.list[0].weather[0].description);
      })
      .catch(function(err) {
        console.log('Errror in getWeatherInfo:', err);
      });
    }
  },
  render: function() {
    let Loader = null;
    var isLoading = this.state.isLoading;
    if(isLoading) {
      Loader = <p>Loading...</p>
    }
    return (
      <div>
        <p>Forecast component</p>
        {Loader}
      </div>
    );
  }
});

module.exports = Forecast;

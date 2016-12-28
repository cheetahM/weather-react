var React = require('react');
var ReactRouter = require('react-router');
var getWeatherHelpers = require('../utils/getWeatherHelpers');
var Forecast = require('../components/Forecast');

var ForecastConatainer = React.createClass({
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
    /*if(this.context.router.params.city) {
      this.setState({
        isLoading:false,
        weather: {}
      });
    }*/
      getWeatherHelpers.getWeatherInfo(city)
      .then(function(weather) {
        this.setState({
          isLoading: false,
          weather: weather
        });
      }.bind(this))
      .catch(function(err) {
        console.log('Errror in getWeatherInfo:', err);
      });
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weather={this.state.weather}
        />
    );
  }
});

module.exports = ForecastConatainer;

var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var getWeatherHelpers = require('../utils/getWeatherHelpers');

var Forecast = React.createClass({
  render: function() {
    /*if(this.props.isLoading) {
      Loader = <p>Loading...</p>
    }*/
    function puke(obj) {
      return <pre>{JSON.stringify(obj, null, 2)}</pre>;
    }
    return this.props.isLoading === true
      ? <div> Loading...</div>
      : <div>
          {console.log(this.props.weather)}
          <h1>{this.props.weather.data.city.name} Forecast</h1>
          <div>
            {this.props.weather.data.list[0].weather[0].description}
            <div>
            {this.props.weather.data.list.map(function(item, index) {
              return <p><img src={`http://openweathermap.org/img/${item.weather[0].icon}.png`} />{item.weather[0].description}</p>;
              })
            })}
            </div>
          </div>
        </div>
  }
});

Forecast.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  weather: PropTypes.object.isRequired
}

module.exports = Forecast;

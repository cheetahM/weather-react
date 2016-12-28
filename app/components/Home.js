var React = require('react');
var styles = require('../styles');
var getWeatherHelpers = require('../utils/getWeatherHelpers');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city:''
    }
  },
  componentDidMount: function() {
    var city = this.state.city;
    //getWeatherHelpers.getWeatherInfo(city);
    //console.log(getWeatherHelpers.getWeatherInfo(city))
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var city = this.state.city;
    this.context.router.push('/forecast/' + this.state.city)
  },
  handleChange: function(e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles.backgriundImg}>
        <h1 className='text-center'>Weather App</h1>
        <div className='col-sm-12 text-center'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='cityState'>
                Enter city and State
                <input
                  id='cityState'
                  className='form-control'
                  value={this.state.city}
                  onChange={this.handleChange}
                  placeholder='Enter city'
                  type='text' />
              </label>
            </div>
            <div className='form-group col-sm-2 col-sm-offset-2'>
              <button className='btn btn-block btn-success'
                type='submit'>Get Weather</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Home;

var React = require('react');
var axios = require('axios');

const API_KEY='3a868ccfe028496261810e5ffae43d72';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function getWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return request;
}



var helpers = {
  getWeatherInfo: function (city) {
    return  getWeather(city)
            .then(function(weather) {
                return weather;
            })
            .catch(function(err) {
                console.log('error in getWeather:' , err);
            });
  }
}

module.exports = helpers;

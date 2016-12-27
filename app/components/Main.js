var React = require('react');
var Header= require('./Header');
var styles= require('../styles');

var Main = React.createClass({
  render: function() {
    return (
      <div className='' style={styles.container}>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;

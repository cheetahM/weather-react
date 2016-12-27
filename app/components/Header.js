var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div style={{align:'left'}}>Bash Inc</div>
        <div style={{display:'inline-block'}}>
          <form>
            <label htmlFor='cityState'>
              Enter city and State
              <input
                id='cityState'
                className=''
                type='text' />
            </label>
            <Link to=''>
              <div className='/forecast'>
                <button className='btn btn-block btn-success'
                  type='submit'>Get Weather</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Header;

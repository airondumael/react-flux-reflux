var React = require('react');

var Task = require('./Task.react');
var TaskCount = require('./TaskCount.react');

var App = React.createClass({
    render: function() {
        return (
            <div className="App">
                <div className="header">App  <TaskCount /></div>
                <Task />
            </div>
        );
    }
});

module.exports = App;
var React = require('react');
var TaskActions = require('../actions/TaskActions');

var TaskList = React.createClass({
    render: function() {
        return (
            <li className="task-item">
                <strong>{this.props.author} : </strong>
                <span>{this.props.text}</span>
                <button onClick={this._toggleTaskStatus}> {this.props.done ? 'DONE' : 'X'}</button>
            </li>
        );
    },
    _toggleTaskStatus: function() {
        TaskActions.toggleTaskStatus(this.props.id);
    }
});

module.exports = TaskList;
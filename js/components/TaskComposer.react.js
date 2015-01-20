var React = require('react');
var TaskStore = require('../stores/TaskStore');
var TaskActions = require('../actions/TaskActions');

var TaskComposer = React.createClass({
    getInitialState: function() {
        return {text: ''};
    },
    render: function() {
        return (
            <div className="task-composer">
                <textarea
                    name="txtTask"
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    placeholder="Task Detail"
                />
            </div>
        );
    },
    _onChange: function(event, value) {
        this.setState({text: event.target.value});
    },
    _onKeyDown: function(event) {
        if(event.keyCode === 13) {
            event.preventDefault();
            var text = this.state.text.trim();
            if(text) {
                TaskActions.createTask(text);
            }
            this.setState({text: ''});
        }
    }
});

module.exports = TaskComposer;
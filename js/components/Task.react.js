var React = require('react');
var TaskStore = require('../stores/TaskStore');
var TaskComposer = require('./TaskComposer.react');
var TaskList = require('./TaskList.react');

var getStateFromStores = function() {
    return {
        tasks: TaskStore.getAll()
    }
};

var Task = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },
    componentDidMount: function() {
        TaskStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        TaskStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var tasks = this.state.tasks;

        var tasklist = Object.keys(tasks).map(function(id) {
            return (
                <TaskList author={tasks[id].author}
                    text={tasks[id].text}
                    done={tasks[id].done}
                    id={id} />
            );
        });

        return (
            <div className="task-list">
                <ul className="task-items">
                    {tasklist}
                </ul>
                <TaskComposer />
            </div>
        );
    },
    _onChange: function() {
        this.setState(getStateFromStores());
    }
});

module.exports = Task;
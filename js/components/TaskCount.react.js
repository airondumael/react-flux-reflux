var React = require('react');
var TaskStore = require('../stores/TaskStore');

var getStateFromStore = function() {
    return {
        done: TaskStore.getDoneCount(),
        not_done: TaskStore.getNotDoneCount(),
        all: TaskStore.getCount()
    }
};

var TaskCount = React.createClass({
    getInitialState: function() {
        return getStateFromStore();
    },
    componentDidMount: function() {
        this.unsubscribe = TaskStore.listen(this._onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    render: function() {
        return (
            <div className="task-counts">
                <strong> DONE: </strong> {this.state.done}
                <strong> NOT DONE: </strong> {this.state.not_done}
                <strong> ALL: </strong> {this.state.all}
            </div>
        );
    },
    _onChange: function() {
        this.setState(getStateFromStore());
    }
});

module.exports = TaskCount;
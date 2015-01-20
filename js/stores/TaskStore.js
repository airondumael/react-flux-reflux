var Reflux = require('reflux');
var TodoActions = require('../actions/TaskActions');
var TaskUtils = require('../utils/TaskUtils');
var _ = require('lodash');

var _tasks = {
    1: {
        id: 1,
        author: 'Author',
        date: +new Date(),
        text: 'Task 1',
        done: true
    }
};

function _addTask(rawTask) {
    _tasks[rawTask.id] = TaskUtils.convertRawTask(rawTask);
}

function _toggleTaskStatus(taskId) {
    if(typeof _tasks[taskId] !== 'undefined') {
        _tasks[taskId].done = !_tasks[taskId].done;
    }
}

var TaskStore = Reflux.createStore({
    listenables: [TodoActions],
    onCreateTask: function(text) {
        _addTask({
            id: Math.random()*1000,
            author: 'Author',
            date: new Date(),
            text: text,
            done: false
        }); // if asynchronous should be on callback
        this.emitChange();
    },
    onToggleTaskStatus: function(id) {
        _toggleTaskStatus(id); // if asynchronous should be on callback
        this.emitChange();
    },
    get: function(id) {
        return _tasks[id];
    },
    getAll: function() {
        return _tasks;
    },
    emitChange: function() {
        // this.trigger(this.getAll);
        this.trigger();
    },
    getDoneCount: function() {
        return _.filter(_tasks, function(item) {
            return item.done === true;
        }).length;
    },
    getCount: function() {
        return Object.keys(_tasks).length;
    },
    getNotDoneCount: function() {
        return _.filter(_tasks, function(item) {
            return item.done === false;
        }).length;
    }
});

module.exports = TaskStore;
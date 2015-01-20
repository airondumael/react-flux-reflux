var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var TaskUtils = require('../utils/TaskUtils');
var assign = require('object-assign');
var _ = require('lodash');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

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

var TaskStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    get: function(id) {
        return _tasks[id];
    },
    getAll: function() {
        return _tasks;
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

TaskStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.type) {
        case ActionTypes.ADD_TASK:
            _addTask(action.data);
            TaskStore.emitChange();
            break;
        case ActionTypes.TOGGLE_TASK_STATUS:
            _toggleTaskStatus(action.id);
            TaskStore.emitChange();
            break;
        default:
        // do nothing
    }
});

module.exports = TaskStore;
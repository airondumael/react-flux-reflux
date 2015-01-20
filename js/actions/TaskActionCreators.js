var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var TaskUtils = require('../utils/TaskUtils');
var TaskStore = require('../stores/TaskStore');

var ActionTypes = AppConstants.ActionTypes;

var createTask = function(text) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.ADD_TASK,
        data: {
            id: Math.random()*1000,
            author: 'Author',
            date: new Date(),
            text: text,
            done: false
        }
    });

    // send post request to server;
};

var toggleTaskStatus = function(id) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.TOGGLE_TASK_STATUS,
        id: id
    });

    // send post request to server;
}

exports.createTask = createTask;
exports.toggleTaskStatus = toggleTaskStatus;
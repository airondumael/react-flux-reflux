'use strict';
var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "createTask",
    "toggleTaskStatus"
]);

module.exports = TodoActions;
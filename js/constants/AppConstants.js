var keyMirror = require('keymirror');

var constants = {
    ActionTypes: keyMirror({
        ADD_TASK: null,
        TOGGLE_TASK_STATUS: null
    }),
    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTIONI: null
    })
};

module.exports = constants;
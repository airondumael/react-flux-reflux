var convertRawTask = function(rawTask) {
    return {
        id: rawTask.id,
        author: rawTask.author,
        date: new Date(rawTask.timestamp),
        text: rawTask.text,
        done: rawTask.done
    }
};

exports.convertRawTask = convertRawTask;
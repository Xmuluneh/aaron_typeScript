"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTOdo(id, title, completed);
});
var logTOdo = function (id, title, completed) {
    console.log("\n    ID:".concat(id, "\n    Title: ").concat(title, "\n    Completed: ").concat(completed, "\n  \n    "));
};

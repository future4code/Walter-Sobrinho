"use strict";
exports.__esModule = true;
var fs = require("fs");
function addTask(foo, boo) {
    fs.appendFileSync(foo, boo);
}
var tarefa = process.argv[3];
var doc = process.argv[2];
var newTask = addTask(doc, tarefa);
console.log(newTask);

import * as fs from "fs";

function addTask(foo: string, boo: string): any {
  fs.appendFileSync(foo, boo);
}

const tarefa = process.argv[3];

const doc = process.argv[2];

const newTask = addTask(doc, tarefa);

console.log(newTask);

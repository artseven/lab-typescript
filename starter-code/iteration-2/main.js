"use strict";
// exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("===========NEW TASK===========");
        console.log("Task \"" + this.myArray + "\" has been added to your list");
        return this.myArray.length;
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.myArray.length; i++) {
            if (this.myArray[i] === task) {
                this.myArray.splice(i, 1);
                console.log("===========TASK REMOVED=========");
                console.log("Task \"" + task + "\" removed from your list");
            }
        }
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log('========== ALL TASKS ==========');
        this.myArray.forEach(function (oneTask) {
            console.log(oneTask);
        });
        return this.myArray.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();

var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("===========NEW TASK===========");
    console.log("Task \"" + myArray + "\" has been added to your list");
    return myArray.length;
}
function listAllTasks(task) {
    console.log("~~~~~~~~~~~~~~TASKS~~~~~~~~");
    myArray.forEach(function (oneTask) {
        console.log("ONE TASK IS:" + oneTask);
    });
    return myArray.length;
}
function deleteTask(task) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == task) {
            myArray.splice(i, 1);
            console.log("===========TASK REMOVED=========");
            console.log("Task \"" + task + "\" removed from your list");
        }
    }
    return myArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

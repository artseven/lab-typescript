// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = []; // Array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string) {
  myArray.push(task);
  console.log("===========NEW TASK===========")
  console.log("Task \""+myArray+"\" has been added to your list");
  return myArray.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks(task: string): number {
  console.log(`~~~~~~~~~~~~~~TASKS~~~~~~~~`);
  myArray.forEach((oneTask) => {
    console.log("ONE TASK IS:"+ oneTask)
  });
  return myArray.length;
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task: string) {
  for (let i=0; i<myArray.length; i++) {
    if (myArray[i] == task) {
      myArray.splice(i,1);
      console.log("===========TASK REMOVED=========");
      console.log("Task \""+ task + "\" removed from your list");
    }
  }
 return myArray.length;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

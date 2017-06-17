// Add the reference to the "TodoInterface"
import { ToDo } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDo {
  public myArray: string[] = []
  constructor() {}
  addTask(task: string): number {
  this.myArray.push(task)
  console.log("===========NEW TASK===========")
  console.log("Task \""+ this.myArray +"\" has been added to your list");
  return this.myArray.length;
  }
  deleteTask(task: string): number {
    for (let i = 0; i < this.myArray.length; i++) {
      if (this.myArray[i] === task) {
        this.myArray.splice(i, 1)
        console.log("===========TASK REMOVED=========");
        console.log("Task \""+ task + "\" removed from your list");
      }
    }
    return this.myArray.length;
  }
  listAllTasks(): number {
    console.log('========== ALL TASKS ==========')
    this.myArray.forEach( (oneTask) => {
      console.log(oneTask)
    })
    return this.myArray.length;
  }
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();

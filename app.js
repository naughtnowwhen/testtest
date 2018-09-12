const myList = ['frogs', 'jackals', 'ducks'];

const listLooker = myList.indexOf('ducks');


const someToDos = [{
  taskName: 'go to gym',
  done: false,
},{
  taskName: 'learn more javascript',
  done: false,
},{
  taskName: 'play the drums',
  done: false,
}];

const finder = someToDos.findIndex(function (task, index){
  console.log(task);
  return task.taskName === 'play the drums';});
// console.log(finder);



const findToDos = function (toDoList, taskName) {
  const index = toDoList.findIndex(function(todo, index) {
    return todo.taskName.toLowerCase() === taskName.toLowerCase();
  });
  return toDoList[index];
};

let result = findToDos(someToDos, 'learn more javascript');

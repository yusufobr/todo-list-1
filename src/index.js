import renderTodo from './modules/renderTodo';
import { setMoreOption, deleteFromList, editDescription } from './modules/setMoreOption';
import { CompleteStatus } from './modules/StatusComplete';
import './styles.css';

const TodoContainer = document.querySelector('.todo-list');
const Input = document.querySelector('.add');
const Form = document.querySelector('form');
const Clear = document.querySelector('.clear');

let TodoList = [];
function getTodos() {
  if (localStorage.getItem('todos')) {
    TodoList = JSON.parse(localStorage.getItem('todos'));
  }
}

getTodos();

function addTodoToList(todo) {
  TodoList.push(todo);
}

function addTodo() {
  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    getTodos();
    addTodoToList({
      discription: Input.value,
      index: TodoList.length !== 0 ? TodoList[TodoList.length - 1].index + 1 : 1,
      completed: false,
    });
    localStorage.setItem('todos', JSON.stringify(TodoList));
    getTodos();
    renderTodo(TodoList, TodoContainer);
    setMoreOption(TodoList, renderTodo, TodoContainer);
    Input.value = '';
  });
}

export default addTodo;

function ClearCompleted(TodoList) {
  const newK = TodoList.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

Clear.addEventListener('click', () => {
  getTodos();
  TodoList = ClearCompleted(TodoList);
  localStorage.setItem('todos', JSON.stringify(TodoList));

  renderTodo(TodoList, TodoContainer);
  setMoreOption(TodoList, renderTodo, TodoContainer);
});

addTodo();
renderTodo(TodoList, TodoContainer);
setMoreOption(TodoList, renderTodo, TodoContainer);

export {
  addTodoToList, deleteFromList, CompleteStatus, editDescription,
};
import renderTodo from './modules/renderTodo';
import './styles.css';

const TodoContainer = document.querySelector('.todo-list');

const TodoList = [{
  index: 0,
  description: 'Task 1',
  completed: false,
},
{
  index: 1,
  description: 'Task 2',
  completed: false,
}];

renderTodo(TodoList, TodoContainer);
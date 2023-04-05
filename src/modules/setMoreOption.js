import StatusComplete from './StatusComplete';

function deleteFromList(TodoList, todo) {
  const filtered = TodoList.filter((k) => k.index !== todo.index);
  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = i + 1;
  }
  return filtered;
}

function setMoreOption(TodoList, renderTodo, TodoContainer) {
  if (!TodoList) {
    return;
  }
  TodoList.forEach((todo) => {
    const More = document.querySelector(`.more-option-${todo.index}`);
    const DBtn = document.querySelector(`.delete-${todo.index}`);
    const TodoDes = document.querySelector(`.todo-item-i${todo.index}`);
    const CompletedBox = document.querySelector(`.completed-${todo.index}`);

    More.addEventListener('mouseover', () => {
      More.style.display = 'none';
      DBtn.style.display = 'block';
    });

    DBtn.addEventListener('mouseout', () => {
      More.style.display = 'block';
      DBtn.style.display = 'none';
    });

    DBtn.addEventListener('click', () => {
      TodoList = deleteFromList(TodoList, todo);

      localStorage.setItem('todos', JSON.stringify(TodoList));

      renderTodo(TodoList, TodoContainer);
      setMoreOption(TodoList, renderTodo, TodoContainer);
    });

    TodoDes.addEventListener('change', (e) => {
      const newT = TodoList.map((p) => {
        if (p.index === todo.index) {
          return {
            discription: e.target.value,
            index: p.index,
            completed: p.completed,
          };
        }
        return p;
      });

      TodoList = newT;

      localStorage.setItem('todos', JSON.stringify(TodoList));
      renderTodo(TodoList, TodoContainer);
      setMoreOption(TodoList, renderTodo, TodoContainer);
    });

    StatusComplete(CompletedBox, TodoList, TodoContainer, renderTodo, setMoreOption, todo);
  });
}

export {
  setMoreOption,
  deleteFromList,
};
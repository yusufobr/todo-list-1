function CompleteStatus(TodoList, todo) {
  const newT = TodoList.map((p) => {
    if (p.index === todo.index) {
      return {
        discription: p.discription,
        index: p.index,
        completed: !p.completed,
      };
    }
    return p;
  });

  return newT;
}

const StatusComplete = (CompletedBox, TodoList, TodoContainer, renderTodo, setMoreOption, todo) => {
  CompletedBox.addEventListener('change', () => {
    TodoList = CompleteStatus(TodoList, todo);

    localStorage.setItem('todos', JSON.stringify(TodoList));
    renderTodo(TodoList, TodoContainer);
    setMoreOption(TodoList, renderTodo, TodoContainer);
  });
};

export { StatusComplete, CompleteStatus };
const StatusComplete = (CompletedBox, TodoList, TodoContainer, renderTodo, setMoreOption, todo) => {
  CompletedBox.addEventListener('change', () => {
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

    TodoList = newT;

    localStorage.setItem('todos', JSON.stringify(TodoList));
    renderTodo(TodoList, TodoContainer);
    setMoreOption(TodoList, renderTodo, TodoContainer);
  });
};

export default StatusComplete;
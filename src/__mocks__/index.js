const TodoList = [];

function addTodoToList(todo) {
  TodoList.push(todo);
  return TodoList;
}

function deleteFromList(todo) {
  const filtered = TodoList.filter((k) => k.index !== todo.index);
  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = i + 1;
  }
  return filtered;
}

exports.addTodoToList = addTodoToList;
exports.deleteFromList = deleteFromList;
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

const TodoList2 = [
  {
    discription: 'test description',
    index: 1,
    completed: false,
  },
  {
    discription: 'test description 2',
    index: 2,
    completed: false,
  },
];

function CompleteStatus(todo) {
  const newT = TodoList2.map((p) => {
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

function editDescription(todo, des) {
  const newT = TodoList2.map((p) => {
    if (p.index === todo.index) {
      return {
        discription: des,
        index: p.index,
        completed: p.completed,
      };
    }
    return p;
  });
  return newT;
}

function ClearCompleted(todos) {
  const newK = todos.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

exports.ClearCompleted = ClearCompleted;
exports.editDescription = editDescription;
exports.CompleteStatus = CompleteStatus;
exports.addTodoToList = addTodoToList;
exports.deleteFromList = deleteFromList;
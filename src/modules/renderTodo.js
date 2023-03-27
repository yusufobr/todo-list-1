const renderTodo = (Todos, Element) => {
  let finalHtml = '';
  Todos.forEach((todo) => {
    finalHtml += `

      <li>
      <div>
        <input ${todo.completed ? 'checked' : ''} type="checkbox" />
        <input value="${todo.discription}" class="todo-item-each todo-item-i${todo.index}"/>
      </div>
      <i class="material-icons dots more-option-${todo.index}">more_vert</i>
      <i class="material-icons delete delete-${todo.index}" style="display: none;">
    delete
  </i>
      </li>
      
    `;
  });

  Element.innerHTML = finalHtml;
};

export default renderTodo;
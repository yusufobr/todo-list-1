const renderTodo = (Todos, Element)=>{
  let finalHtml = ""
  Todos.forEach(todo =>{
    finalHtml += `

      <li>
      <div>
        <input type="checkbox" />
        <p>${todo.description}</p>
      </div>
      <i class="material-icons dots">more_vert</i>
      
      </li>
    `
  })

  Element.innerHTML = finalHtml;
}

export default renderTodo;

export const filterTodos = (textSearch, todos, refreshTodo, setTodos, setRefreshTodo) => {
  if (!textSearch) {
    setRefreshTodo(!refreshTodo)
  } else {
    const searchTodos = todos.filter(item =>
      item.text.toLowerCase().includes(textSearch.toLowerCase()))
    setTodos(searchTodos)
  }
}

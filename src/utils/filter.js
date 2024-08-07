
export const filterTodos = (textSearch, todos, setTodos, todoInitial) => {
  const searchTodos = [...todoInitial].filter(item =>
    item.text.toLowerCase().includes(textSearch.toLowerCase()))
  setTodos(searchTodos)
}

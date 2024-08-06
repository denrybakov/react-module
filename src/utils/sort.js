export const sortTodos = (todo, setTodos) => {
  const sortedTodos = [...todo]
    .sort((item1, item2) => item1.text.localeCompare(item2.text))
  setTodos(sortedTodos)

}

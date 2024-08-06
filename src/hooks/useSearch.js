import { useState } from "react"


export const useSearch = (
  debouncedFilterTodos,
  todos,
  refreshTodo,
  setTodos,
  setRefreshTodo
) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    debouncedFilterTodos(e.target.value, todos, refreshTodo, setTodos, setRefreshTodo)
  }

  return {
    searchValue,
    setSearchValue,
    handleSearch
  }
}

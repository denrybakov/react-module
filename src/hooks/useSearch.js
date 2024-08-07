import { useState } from "react"


export const useSearch = (debouncedFilterTodos, todos,) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchTodo, setSearchTodo] = useState([])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    debouncedFilterTodos(e.target.value, searchTodo, setSearchTodo, todos)
  }

  return {
    searchValue,
    setSearchValue,
    handleSearch,
    searchTodo,
    setSearchTodo
  }
}

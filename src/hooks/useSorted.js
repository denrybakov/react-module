import { useState } from "react"
import { sortTodos } from "../utils"


export const useSorted = (todos, setTodos, refreshTodo, setRefreshTodo) => {
  const [isSorted, setIsSorted] = useState(false)

  const handleSorted = () => {
    setIsSorted(!isSorted)
    isSorted === false ? setRefreshTodo(!refreshTodo) : sortTodos(todos, setTodos)
  }

  return {
    isSorted, setIsSorted, handleSorted
  }
}

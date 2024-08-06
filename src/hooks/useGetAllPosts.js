import { useEffect } from "react"
import { GET_TODOS_JSON_SERVER } from "../constans"
import { fetchTodos } from "../AsyncRequests/fetchTodos"

export const useGetAllPosts = (setTodos, setSpinner, setTodosDone, refreshTodo) => {
  useEffect(() => {
    const getAllPosts = async () => {
      const todos = await fetchTodos(GET_TODOS_JSON_SERVER, setSpinner)
      const doneTodos = todos.filter(todo => todo.completed)
      // eslint-disable-next-line no-unused-expressions
      Array.isArray(todos)
        ? (setTodos(todos), setTodosDone(doneTodos))
        : (setTodos([]), setTodosDone([]))
    }
    return () => getAllPosts()
  }, [setSpinner, setTodosDone, setTodos, refreshTodo])
}

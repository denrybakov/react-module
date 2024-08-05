import { useEffect } from "react"
import { fetchAllPosts } from "../AsyncRequests/getAllPosts"
import { GET_ALL_TODOS_JSONPLACEHOLDER } from "../constans"

export const useGetAllPosts = (setTodos, setSpinner) => {
  useEffect(() => {
    const getAllPosts = async () => {
      const todos = await fetchAllPosts(GET_ALL_TODOS_JSONPLACEHOLDER, setSpinner)
      Array.isArray(todos)
        ? setTodos(todos)
        : setTodos([])
    }
    return () => getAllPosts()
  }, [setTodos, setSpinner])
}

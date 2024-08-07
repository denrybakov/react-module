import { useEffect, useState } from "react"
import { ref, onValue } from 'firebase/database'
import { db } from "../firebase"
import { parseDataFirebase } from "../utils"
import { GET_TODOS_FIREBASE } from '../constans'

export const useGetTodos = () => {
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    setSpinner(true)
    const todosDbRef = ref(db, GET_TODOS_FIREBASE)

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = parseDataFirebase(snapshot.val() ?? [])
      const loadedTodosDone = loadedTodos.filter(todo => todo.completed)
      setTodos([...loadedTodos])
      setTodosDone([...loadedTodosDone])
      setSpinner(false)
    })

  }, [])

  return {
    todos,
    setTodos,
    todosDone,
    setTodosDone,
    spinner,
    setSpinner
  }
}


// const getAllPosts = async () => {
//   const todosData = await fetchTodos(GET_TODOS_JSON_SERVER, setSpinner)
//   const todosDoneData = todosData.filter(todo => todo.completed)

//   if (Array.isArray(todosData) && Array.isArray(todosDoneData)) {
//     setTodos([...todosData])
//     setTodosDone([...todosDoneData])
//   } else {
//     setTodos([])
//     setTodosDone([])
//   }
// }

// getAllPosts()

// import axios from "axios"
// import { GET_TODO_ID_JSON_SERVER, GET_TODOS_JSON_SERVER } from "../constans"
// import { fetchTodos } from "./fetchTodos"



// export const updateTodosOnServer = async (updatedTodos, refreshTodo, setRefreshTodo) => {
//   try {
//     for (const todo of updatedTodos) {
//       await axios.put(GET_TODO_ID_JSON_SERVER(todo.id))
//     }
//     setRefreshTodo(!refreshTodo)
//   } catch (err) {
//     console.error('Ошибка запроса на updateTOdosServer')
//   }
// }

// export const getUnsortTodos = (setSpinner) => {
//   fetchTodos(GET_TODOS_JSON_SERVER, setSpinner)
// }

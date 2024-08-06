import axios from 'axios'
import { GET_TODO_ID_JSON_SERVER } from '../constans'

export const deleteTodo = async (idTodo, setSpinner, refreshTodo, setRefreshTodo) => {
  setSpinner(true)
  try {
    await axios.delete(GET_TODO_ID_JSON_SERVER(idTodo))
    setRefreshTodo(!refreshTodo)
  } catch (err) {
    console.error('Ошибка удаления', err)
  } finally {
    setSpinner(false)
  }
}

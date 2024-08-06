import axios from "axios"
import { GET_TODO_ID_JSON_SERVER } from "../constans"
import { dateNow } from "../utils"


export const putTodoId = async (id, text, completed, setRefreshTodo, refreshTodo) => {
  if (!id) throw new Error('Ошибка id')
  try {
    await axios.put(GET_TODO_ID_JSON_SERVER(id), {
      id,
      text,
      completed,
      createdAt: dateNow(),
      changed: true
    })
    setRefreshTodo(!refreshTodo)

  } catch (err) {
    console.error('Ошибка изменения', err)
    throw new Error('Error', err)
  }
}

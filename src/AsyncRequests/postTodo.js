import axios from "axios"
import { POST_TODO_JSON_SERVER } from "../constans"
import { dateNow } from "../utils"


export const postTodo = async (text, setRefreshTodo, refreshTodo) => {
  // if (!text) throw new Error('Empty todo text')

  try {
    await axios.post(POST_TODO_JSON_SERVER, {
      text,
      completed: false,
      createdAt: dateNow(),
      changed: false
    })
    setRefreshTodo(!refreshTodo)
  } catch (err) {
    console.error('Ошибка запроса на добавление todo', err)
    throw new Error('Error')
  }
}

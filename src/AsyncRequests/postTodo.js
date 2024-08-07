import { dateNow } from "../utils"
import { push, ref } from "firebase/database"
import { db } from "../firebase"
import { POST_TODO_FIREBASE } from '../constans'


export const postTodo = async (text) => {
  if (!text) throw new Error('Empty todo text')

  try {
    const todosDbRef = ref(db, POST_TODO_FIREBASE)
    push(todosDbRef, {
      text,
      completed: false,
      createdAt: dateNow(),
      changed: false
    })

  } catch (err) {
    console.error('Ошибка запроса на добавление todo', err)
    throw new Error('Error')
  }
}

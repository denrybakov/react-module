import { dateNow } from "../utils"
import { ref, set } from "firebase/database"
import { db } from "../firebase"
import { ID_TODO_FIREBASE } from '../constans'



export const putTodoId = async (id, text, completed) => {
  if (!id) throw new Error('Ошибка id')
  try {
    const todoDbRef = ref(db, ID_TODO_FIREBASE(id))
    set(todoDbRef, {
      text,
      completed,
      createdAt: dateNow(),
      changed: true
    })
  } catch (err) {
    console.error('Ошибка изменения', err)
    throw new Error('Error', err)
  }
}

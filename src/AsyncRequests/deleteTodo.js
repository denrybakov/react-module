import { db } from '../firebase'
import { ref, remove } from 'firebase/database'
import { ID_TODO_FIREBASE } from '../constans'

export const deleteTodo = async (idTodo, setSpinner) => {
  setSpinner(true)
  try {

    const todosIdRef = ref(db, ID_TODO_FIREBASE(idTodo))
    remove(todosIdRef)

  } catch (err) {
    console.error('Ошибка удаления', err)
  } finally {
    setSpinner(false)
  }
}

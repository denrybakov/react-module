import { useState } from "react"


export const useEditId = (setIsModalEdit) => {
  const [todoId, setTodoId] = useState({
    id: '', text: '', changed: false, completed: false
  })

  const handleEditId = (id, text, changed, completed) => {
    setTodoId({ id, text, changed, completed })
    setIsModalEdit(true)
  }

  return {
    todoId,
    handleEditId
  }
}

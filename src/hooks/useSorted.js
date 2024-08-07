import { useState } from "react"
import { sortTodos } from "../utils"
import { get, ref } from "firebase/database"
import { db } from "../firebase"
import { GET_TODOS_FIREBASE } from '../constans'
import { parseDataFirebase } from "../utils"


export const useSorted = (todos, setTodos) => {
  const [isSorted, setIsSorted] = useState(false)

  const handleSorted = async () => {
    setIsSorted(!isSorted)
    if (isSorted) {
      sortTodos(todos, setTodos)
    } else {
      get(ref(db, GET_TODOS_FIREBASE))
        .then(data => {
          const newArr = parseDataFirebase(data.val())
          setTodos(newArr)
        })
    }
  }

  return {
    isSorted, setIsSorted, handleSorted
  }
}

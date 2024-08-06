import { List } from '../List';
import { useState } from 'react';

import { GridLoader } from 'react-spinners';
import { useGetAllPosts } from '../../hooks/useGetAllPosts';
import styles from './App.module.css';

// const todos = [
//   {
//     "id": "1",
//     "text": "Eat",
//     "completed": false,
//     "createdAt": "yesterday",
//     "changed": false
//   },
//   {
//     "id": "2",
//     "text": "Code",
//     "completed": true,
//     "createdAt": "yesterday",
//     "changed": true
//   },
//   {
//     "id": "3",
//     "text": "Sleep",
//     "completed": false,
//     "createdAt": "yesterday",
//     "changed": false
//   },
//   {
//     "id": "4",
//     "text": "Repeat",
//     "completed": false,
//     "createdAt": "yesterday",
//     "changed": false
//   }
// ]



export const App = () => {
  const [todos, setTodos] = useState([])
  const [spinner, setSpinner] = useState(true)

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const todos = await fetchAllPosts(GET_ALL_TODOS_JSONPLACEHOLDER, setSpinner)
  //     setTodos(todos)
  //     console.log(todos)
  //   }
  //   return () => getAllPosts()
  // }, [])
  useGetAllPosts(setTodos, setSpinner)

  return (
    <div className={styles.app}>
      {/* <CheckBox id='asd' text={'prosto'} /> */}
      {spinner && <GridLoader />}


      {!spinner && <List todos={todos} />}
    </div>
  )
}

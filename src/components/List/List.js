import { CheckBox } from "../CheckBox"
import { Delete } from "../Delete/Delete"

import styles from './List.module.css'

export const List = ({ todos = [] }) => {

  return (
    <ul className={styles.list}>
      {/* {todos?.map(item => <li
        key={item.id}
        className={`${styles.listItem} ${item.completed ? styles.green : ''}`}

      >
        <CheckBox id={item.id} completed={item.completed} />
        {item.text}
        <Delete />
      </li>)} */}
      {todos?.map(item => <li
        key={item.id}
        className={`${styles.listItem} ${item.completed ? styles.green : ''}`}

      >
        {item.title}
      </li>)}
    </ul>
  )
}

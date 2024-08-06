import { CheckBox } from "../CheckBox"
import { Delete } from "../Delete/Delete"
import { Edit } from "../Edit"

import styles from './List.module.css'

export const List = ({
  todos = [],
  handleDeleteTodo,
  setIsModalEdit,
  handleEditTodo,
  handleCheckBoxToggle
}) => {
  return (
    <>
      <ul className={styles.list}>
        {todos.length === 0 && <h2>Здесь пока ничего нет...</h2>}
        {todos?.map(({ id, text, completed = false, createdAt, changed }) =>
          <li
            key={id}
            className={`${styles.listItem} ${completed ? styles.green : ''}`}
          >
            <CheckBox
              id={id}
              text={text}
              completed={completed}
              handleCheckBoxToggle={handleCheckBoxToggle}
            />
            {text}
            <div>
              <Edit
                id={id}
                text={text}
                completed={completed}
                setIsModalEdit={setIsModalEdit}
                handleEditTodo={handleEditTodo}
                changed={changed}
              />
              <Delete id={id} handleDeleteTodo={handleDeleteTodo} />
            </div>
            {changed && <span className={styles.listChange}>Изменено: {createdAt}</span>}
          </li>)}
      </ul>
    </>
  )
}

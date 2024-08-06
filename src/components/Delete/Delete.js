
import styles from './Delete.module.css'

export const Delete = ({ id, handleDeleteTodo }) =>
  <span className={styles.del} onClick={() => handleDeleteTodo(id)}></span>

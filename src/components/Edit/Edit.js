import styles from './Edit.module.css'

export const Edit = ({
  id,
  text,
  completed,
  setIsModalEdit,
  handleEditTodo,
  changed
}) => {
  const handleEdit = () => {
    setIsModalEdit(true)
    handleEditTodo(id, text, changed, completed)
  }

  return (
    <span className={styles.edit} onClick={handleEdit}></span>
  )
}

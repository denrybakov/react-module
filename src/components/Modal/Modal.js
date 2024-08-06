import { useRef, useState } from 'react'
import styles from './Modal.module.css'
import { postTodo, putTodoId } from '../../AsyncRequests'

export const Modal = ({
  id,
  title,
  text,
  completed,
  isAdd,
  isEdit,
  handleModalTodo,
  refreshTodo,
  setRefreshTodo,
  setIsModalEdit }) => {

  const [value, setValue] = useState(isEdit ? text : '')
  const [errorModal, setErrorModal] = useState('')
  const refModal = useRef(null)

  const handleBtnModal = async () => {
    if (value === '') {
      setErrorModal('Поле не должно быть пустым')
    } else if (value.length <= 2) {
      setErrorModal('Минимум 3 символа')
    } else if (value) {
      postTodo(value, setRefreshTodo, refreshTodo)
      setValue('')
      handleModalTodo()
    }
  }

  const handleEdit = async () => {
    putTodoId(id, value, completed, setRefreshTodo, refreshTodo)
    setIsModalEdit(false)
  }

  const handleCloseModal = (e) => {
    if (refModal.current && !refModal.current.contains(e.target)) {
      isEdit ? setIsModalEdit(false) : handleModalTodo();
    }
  }

  return (
    <section className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.modalBody} ref={refModal}>
        <h3>{title}</h3>
        {isAdd && (
          <div>
            <input
              type="text"
              value={value}
              className={styles.modalAdd}
              placeholder={'Введите название новой задачи...'}
              // eslint-disable-next-line no-sequences
              onChange={({ target }) => (setValue(target.value), setErrorModal(''))}
            />
            <button
              className={styles.modalBtn}
              // eslint-disable-next-line no-sequences
              onClick={handleBtnModal}>Добавить</button>
            {errorModal && <span className={styles.err}>{errorModal}</span>}
          </div>
        )}
        {isEdit && (
          <div>
            <input
              type="text"
              value={value}
              className={styles.modalAdd}
              placeholder={'Введите название новой задачи...'}
              onChange={({ target }) => setValue(target.value)}
            />
            <button
              className={styles.modalBtnEdit}
              // eslint-disable-next-line no-sequences
              onClick={handleEdit}>Изменить</button>
          </div>
        )}
      </div>
    </section>
  )
}

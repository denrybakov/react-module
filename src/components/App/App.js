import { List } from '../List';
import { GridLoader } from 'react-spinners';
import { useEditId, useGetTodos, useSearch, useSorted } from '../../hooks';
import { useMemo, useState } from 'react';
import { deleteTodo, putTodoId } from '../../AsyncRequests';
import { Modal } from '../Modal';
import { filterTodos } from '../../utils';
import { Header } from '../Header';
import debounce from 'lodash/debounce';
import styles from './App.module.css';

export const App = () => {
  const [btnChoise, setChoise] = useState(1)
  const [isModal, setIsModal] = useState(false)
  const [isModalEdit, setIsModalEdit] = useState(false)
  const [refreshTodo, setRefreshTodo] = useState(false)

  const debouncedFilterTodos = useMemo(() => debounce(filterTodos, 400), [])

  const { todos, setTodos, todosDone, spinner, setSpinner } = useGetTodos()
  const { todoId, handleEditId } = useEditId(setIsModalEdit)
  const { isSorted, handleSorted } = useSorted(
    todos, setTodos, refreshTodo, setRefreshTodo
  )
  const { searchValue, handleSearch, searchTodo } = useSearch(debouncedFilterTodos, todos)

  const handleDeleteTodo = (id) => {
    deleteTodo(id, setSpinner)
  }

  const handleCheckBoxToggle = (id, text, completed) => {
    putTodoId(id, text, !completed)
  }
  return (
    <>
      {spinner && <GridLoader />}
      {!spinner && (
        <div className={styles.app}>
          <Header
            isSorted={isSorted}
            handleSorted={handleSorted}
            btnChoise={btnChoise}
            setChoise={setChoise}
            searchValue={searchValue}
            handleSearch={handleSearch}
            setIsModal={setIsModal}
          />
          {btnChoise === 2 && (<List
            todos={todosDone}
            isSorted={isSorted}
            handleDeleteTodo={handleDeleteTodo}
            isModalEdit={isModalEdit}
            setIsModalEdit={setIsModalEdit}
            handleEditTodo={handleEditId}
            handleCheckBoxToggle={handleCheckBoxToggle}
          />)}
          {!spinner && btnChoise === 1 &&
            <List
              todos={searchTodo.length === 0 && !searchValue ? todos : searchTodo}
              isSorted={isSorted}
              handleDeleteTodo={handleDeleteTodo}
              isModalEdit={isModalEdit}
              setIsModalEdit={setIsModalEdit}
              handleEditTodo={handleEditId}
              handleCheckBoxToggle={handleCheckBoxToggle}
            />}
          {isModal && <Modal
            title={'Добавить новую задачу'}
            isAdd={true}
            handleModalTodo={() => setIsModal(false)}
          />}
          {isModalEdit && <Modal
            title={'Изменить задачу'}
            id={todoId.id}
            text={todoId.text}
            changed={todoId.changed}
            completed={todoId.completed}
            isEdit={true}
            handleModalTodo={handleEditId}
            setIsModalEdit={setIsModalEdit}
          />}
        </div>
      )}
    </>
  )
}

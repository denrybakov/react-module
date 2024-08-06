import { List } from '../List';
import { GridLoader } from 'react-spinners';
import { useEditId, useGetAllPosts, useSearch, useSorted } from '../../hooks';
import { useMemo, useState } from 'react';
import { deleteTodo } from '../../AsyncRequests';
import { Modal } from '../Modal';
import { filterTodos } from '../../utils';
import { putTodoId } from '../../AsyncRequests';
import { Header } from '../Header';
import debounce from 'lodash/debounce';
import styles from './App.module.css';

export const App = () => {
  const [todos, setTodos] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [btnChoise, setChoise] = useState(1)
  const [isModal, setIsModal] = useState(false)
  const [isModalEdit, setIsModalEdit] = useState(false)
  const [todosDone, setTodosDone] = useState([])
  const [refreshTodo, setRefreshTodo] = useState(false)

  const debouncedFilterTodos = useMemo(() => debounce(filterTodos, 400), [])

  useGetAllPosts(setTodos, setSpinner, setTodosDone, refreshTodo)

  const {
    isSorted,
    handleSorted
  } = useSorted(todos, setTodos, refreshTodo, setRefreshTodo)

  const {
    searchValue,
    handleSearch
  } = useSearch(debouncedFilterTodos, todos, refreshTodo, setTodos, setRefreshTodo)

  const { todoId, handleEditId } = useEditId(setIsModalEdit)

  const handleDeleteTodo = (id) => {
    deleteTodo(id, setSpinner, refreshTodo, setRefreshTodo)
  }

  const handleCheckBoxToggle = (id, text, completed) => {
    putTodoId(id, text, !completed, setRefreshTodo, refreshTodo)
  }

  return (
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
      {spinner && <GridLoader />}
      {btnChoise === 2 && <List todos={todosDone} />}
      {!spinner && btnChoise === 1 &&
        <List
          todos={todos}
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
        refreshTodo={refreshTodo}
        setRefreshTodo={setRefreshTodo}
      />}
      {isModalEdit && <Modal
        id={todoId.id}
        text={todoId.text}
        changed={todoId.changed}
        completed={todoId.completed}
        title={'Изменить задачу'}
        isEdit={true}
        handleModalTodo={handleEditId}
        refreshTodo={refreshTodo}
        setRefreshTodo={setRefreshTodo}
        setIsModalEdit={setIsModalEdit}
      />}
    </div>
  )
}

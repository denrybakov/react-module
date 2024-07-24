import { nanoid } from 'nanoid'
import { Header } from '../Header/Header'
import { Button } from '../Button/Button'
import { Error } from '../Error/Error'
import { List } from '../List/List'
import { useState, useEffect } from 'react'

import styles from './App.module.css';

const initialState = { value: '', list: [], error: '' }

export const App = () => {
  const [state, setState] = useState({})

  useEffect(() => {
    setState(initialState)
  }, [])

  const onInputButtonClick = (e) => {
    const question = prompt('Введите значение')?.trim()
    question?.length >= 3
      ? setState(prevState => ({ ...prevState, value: question, error: '' }))
      : setState(prevState => ({
        ...prevState,
        error: 'Введенное значение должно содержать минимум 3 символа'
      }))
  }

  const onAddButtonClick = () => {
    if (state.value) {
      const id = nanoid()
      const value = state.value
      setState(prevState => ({
        ...prevState,
        list: [...state.list, { id, value }],
        value: '',
        error: ''
      }))
    }
  }

  return (
    <div className={styles.app}>
      <Header type='h1' text='Ввод значения' className={styles.pageHeading} />
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>:
        "<output className={styles.currentValue}>{state.value}</output>"
      </p>

      {state.error && <Error text={state.error} />}

      <div className={styles.buttonsContainer}>
        <Button
          text='Ввести новое'
          onClick={onInputButtonClick}
        />
        <Button
          text='Добавить в список'
          isDisabled={state.value ? false : true}
          onClick={onAddButtonClick}
        />
      </div>
      <div className={styles.listContainer}>
        <Header type='h2' text='Список:' className={styles.listHeading} />
        <List arrListItem={state.list} />
      </div>

    </div>
  );
}

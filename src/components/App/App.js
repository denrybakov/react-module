import { Header } from '../Header/Header'
import { Button } from '../Button/Button'
import { useState, useMemo } from 'react'
import data from '../../data/data.json'

import styles from './App.module.css';

const initialState = {
  steps: data,
  activeIndex: 1,
  lastStep: data?.length
}

export const App = () => {
  const [state, setState] = useState(initialState)

  const handlePrev = () => {
    setState(prevState => ({
      ...prevState,
      activeIndex: prevState.activeIndex - 1
    }))
  }

  const handleNext = () => {
    setState(prevState => ({
      ...prevState,
      activeIndex: prevState.activeIndex + 1
    }))
  }

  const handleReboot = () => {
    setState(initialState)
  }

  const handleCircleClick = (step) => {
    setState(prevState => ({ ...prevState, activeIndex: step }))
  }

  const renderStepsList = useMemo(() => (
    state.steps.map(({ id, title }, i) => (
      <li
        className={`${styles['steps-item']} ${state.activeIndex > i + 1
          ? styles.done : ''} ${state.activeIndex === i + 1 ? styles.active : ''}`}
        key={id}
      >
        <Button
          text={i + 1}
          className={styles['steps-item-button']}
          onClick={() => handleCircleClick(i + 1)}
        />
        {title}
      </li>
    ))
  ), [state.steps, state.activeIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Header type='h1' text='Инструкция по готовке пельменей' />
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {state.steps?.[state.activeIndex - 1]?.content}
          </div>
          <ul className={styles['steps-list']}>
            {renderStepsList}
          </ul>
          <div className={styles['buttons-container']}>
            <Button
              text='Назад'
              className={styles.button}
              onClick={handlePrev}
              isDisabled={state.activeIndex === 1}
            />
            <Button
              text={state.activeIndex === state.lastStep ? 'Начать заново' : 'Далее'}
              className={styles.button}
              onClick={state.activeIndex === state.lastStep ? handleReboot : handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

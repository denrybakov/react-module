import { useState, useEffect } from 'react';
import { GameLayout } from '../GameLayout/GameLayout';
import { findChampion, findIndexElem } from '../../utils/Utils';

import styles from './Game.module.css';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: ['', '', '', '', '', '', '', '', '',]
}

export const Game = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {

    const isChampX = findChampion(findIndexElem('X', state.field));
    const isChampO = findChampion(findIndexElem('O', state.field));
    const emptyField = state.field.filter(el => el === '');

    if (isChampX) {
      setState(prevState => ({
        ...prevState, currentPlayer: 'X', isGameEnded: true
      }));
    }

    if (isChampO) {
      setState(prevState => ({
        ...prevState, currentPlayer: 'O', isGameEnded: true
      }));
    }

    if (emptyField.length === 0) {
      setState(prevState => ({
        ...prevState, isDraw: true, isGameEnded: true
      }));
    }
  }, [state.field]);

  const handleClickBtn = (index) => {
    if (!state.field[index] && !state.isGameEnded) {
      setState(prevState => ({
        ...prevState,
        currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
        field: prevState.field.map((el, i) => i === index ? state.currentPlayer : el)
      }));
    }
  }

  const handleResetGame = () => {
    setState(initialState);
  }

  return (
    <div className={styles.game}>
      <button className={styles.reset} onClick={handleResetGame}>
        Начать заново
      </button>
      <GameLayout {...state} handleClickBtn={handleClickBtn} />
    </div>
  );
};

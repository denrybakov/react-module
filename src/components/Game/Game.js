import { useState } from 'react';
import { GameLayout } from '../GameLayout/GameLayout';

import styles from './Game.module.css';
import { useGameLogic } from '../../hooks/useGameLogic';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: ['', '', '', '', '', '', '', '', '',]
}

export const Game = () => {
  const [state, setState] = useState(initialState);

  useGameLogic(state, setState)

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

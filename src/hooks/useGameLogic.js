import PropTypes from 'prop-types'
import { useEffect } from "react";
import { findChampion, findIndexElem } from "../utils/Utils";

export const useGameLogic = (state, setState) => {

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
  }, [state.field, setState]);
}

useGameLogic.propTypes = {
  state: PropTypes.shape({
    currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  setState: PropTypes.func.isRequired
}

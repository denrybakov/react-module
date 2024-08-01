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

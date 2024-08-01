
export const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


export const findIndexElem = (elem, arr) =>
  arr
    .map((item, i) => item === elem ? i : null)
    .filter(i => i !== null)


export const findChampion = (arrIndexPlayer, patterWin = WIN_PATTERNS) =>
  patterWin.some(pattern => pattern.every(i => arrIndexPlayer.includes(i)))


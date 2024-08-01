import PropTypes from 'prop-types'

import styles from './InformationLayout.module.css'

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
  <div className={styles.info}>
    {!isDraw && !isGameEnded && <h2>Сейчас ходит: {currentPlayer}</h2>}
    {!isDraw && isGameEnded && <h2>Победа: {currentPlayer}</h2>}
    {isDraw && <h2>Ничья</h2>}
  </div>
)

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
}

import PropTypes from 'prop-types'

import { FieldLayout } from './FieldLayout/FieldLayout'
import { InformationLayout } from './InformationLayout/InformationLayout'

export const GameLayout = ({ currentPlayer, isGameEnded, isDraw, ...fields }) => (
  <>
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
    <FieldLayout
      {...fields}
      isGameEnded={isGameEnded}
    />
  </>
)

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  handleClickBtn: PropTypes.func.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
}

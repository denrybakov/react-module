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
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
}

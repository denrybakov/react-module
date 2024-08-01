import PropTypes from 'prop-types'
import styles from './FieldLayout.module.css'

export const FieldLayout = ({ field, handleClickBtn, isGameEnded }) => (
  <div className={styles.fieldContainer}>
    <div className={styles.l}></div>
    <div className={styles.l}></div>
    <div className={styles.l}></div>
    <div className={styles.l}></div>
    {field?.map((btnField, i) => (
      <button
        key={i}
        className={styles.field}
        disabled={isGameEnded}
        onClick={() => handleClickBtn(i)}
      >{btnField}
      </button>)
    )}
  </div>
)

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  handleClickBtn: PropTypes.func.isRequired
}

import { useState } from 'react'
import styles from './CheckBox.module.css'

export const CheckBox = ({ id, text, completed }) => {

  const [isChecked, setIsChecked] = useState(completed)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <span className={styles.box}>
      <input
        type="checkbox"
        name={text}
        id={id}
        className={styles.hiddenCheckbox}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label
        className={`${styles.customCheckbox} ${isChecked ? styles.checked : ''}`}
        htmlFor={id}
      >
      </label>
    </span>
  )
}

import styles from './Button.module.css'


export const Button = ({ text, className, onClick, isDisabled = false }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={(e) => onClick(e)}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

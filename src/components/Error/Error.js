import styles from './Error.module.css'

export const Error = ({ text }) => {

  return (
    <div className={styles.error}>
      {text}
    </div>
  )
}

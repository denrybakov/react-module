
import styles from './List.module.css'

export const List = ({ arrListItem = [] }) => {

  return (
    <ul className={styles.list}>
      {arrListItem.length === 0 && <p className={styles.noMarginText}>Нет добавленных элементов</p>}
      {arrListItem.map(listItem =>
        <li
          className={styles.listItem}
          key={listItem.id}
        >
          {listItem.value}
        </li>)}
    </ul>
  )
}

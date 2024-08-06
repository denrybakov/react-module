import styles from './Header.module.css'

export const Header = ({
  isSorted,
  handleSorted,
  btnChoise,
  setChoise,
  searchValue,
  handleSearch,
  setIsModal
}) => (
  <div className={styles.appHeader}>
    <button
      className={`${styles.appSort} ${isSorted && styles.select}`}
      onClick={handleSorted}
    ></button>
    <div>
      <button
        className={`${styles.appBtnChoice} ${btnChoise === 1 && styles.select}`}
        onClick={() => setChoise(1)}
      >Все
      </button>
      <button
        className={`${styles.appBtnChoice} ${btnChoise === 2 && styles.select}`}
        onClick={() => setChoise(2)}
      >Сделанные
      </button>
    </div>
    <input
      type="text"
      name={'search'}
      value={searchValue}
      placeholder={'Поиск...'}
      className={`${styles.appSearch}`}
      onChange={handleSearch}
    />
    <button
      className={styles.appBtnAdd}
      onClick={() => setIsModal(true)}
    >Добавить
    </button>
  </div>
)

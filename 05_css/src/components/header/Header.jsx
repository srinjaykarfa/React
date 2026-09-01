import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>My App</h1>
      <button className={styles.btn}>Click Me</button>
    </div>
  )
}

export default Header

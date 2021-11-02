import styles from './Header.module.css';
import logo from '../../img/logo.png';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo_container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.header__links_container}>
        <a href="/form">Форма</a>
        <a href="/preview">Превью</a>
      </div>
    </div>
  );
}

export default Header;
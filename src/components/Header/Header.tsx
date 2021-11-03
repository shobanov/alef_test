import styles from './Header.module.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo_container}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.header__links_container}>
        <Link to="/alef_test">Форма</Link>
        <Link to="/preview">Превью</Link>
      </nav>
    </div>
  );
};

export default Header;
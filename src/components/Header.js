import styles from '../assets/styles/Header.module.css';
import DropDownVector from './vector-components/DropDownVector';
import Logo from './vector-components/Logo';

const Header = () => {
  return (
    <div className={[styles.header, 'center'].join(' ')}>
      <Logo />
      <div className={styles.lang}>
        <h2>Eng</h2>
        <DropDownVector />
      </div>
    </div>
  );
};

export default Header;

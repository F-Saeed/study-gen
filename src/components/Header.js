import styles from '../assets/styles/Header.module.css';
import DropDownVector from './DropDownVector';
import Logo from './Logo';

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

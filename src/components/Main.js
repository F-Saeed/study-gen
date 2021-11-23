import styles from '../assets/styles/Main.module.css';
import CenterVector from './CenterVector';
import Header from './Header';

const Main = () => {
  return (
    <div className={styles.main}>
      <CenterVector />
      <Header />
    </div>
  );
};

export default Main;

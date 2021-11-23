import styles from '../assets/styles/Main.module.css';
import CenterVector from './CenterVector';
import Content from './Content';
import Header from './Header';

const Main = () => {
  return (
    <div className={styles.main}>
      <CenterVector />
      <Header />
      <Content />
    </div>
  );
};

export default Main;

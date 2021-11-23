import styles from '../assets/styles/Content.module.css';
import Login from './Login';

const Content = () => {
  return (
    <div className={['center', styles.content].join(' ')}>
      <div className={styles.textDiv}>
        <h1>Welcome To StudyGen</h1>
        <p>
          StudyGen, a 21 CFR Part 11 Compliant solution,streamlines report
          generation by collating information from different sources to create
          your sample analysis and validation reports in a matter of minutes so
          you can concentrate on what you do best.
        </p>
      </div>
      <Login />
    </div>
  );
};

export default Content;

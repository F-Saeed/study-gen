import styles from '../assets/styles/InputDiv.module.css';

const InputDiv = ({ type, placeholder, Vector1, Vector2 }) => {
  return (
    <div className={styles.inputDiv}>
      <Vector1 />
      <input type={type} placeholder={placeholder} />
      {!!Vector2 && <Vector2 />}
    </div>
  );
};

export default InputDiv;

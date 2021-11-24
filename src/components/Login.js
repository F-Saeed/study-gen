import styles from '../assets/styles/Login.module.css';
import InputDiv from './Input';
import Envelope from './vector-components/Envelope';
import Key from './vector-components/Key';
import Eye from './vector-components/Eye';
import WindowsIcon from './vector-components/WindowsIcon';
import GoogleIcon from './vector-components/GoogleIcon';

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Email</p>
      <InputDiv
        type='email'
        placeholder='example@domain.com'
        Vector1={Envelope}
      />
      <p>Password</p>
      <InputDiv
        type='password'
        placeholder='type your password'
        Vector1={Key}
        Vector2={Eye}
      />
      <div>
        <div>
          <input type='checkbox' />
          <p>Remember me</p>
        </div>
        <p>Forgot your password?</p>
      </div>
      <button>Login</button>
      <div>
        <GoogleIcon />
        <WindowsIcon />
      </div>
    </div>
  );
};

export default Login;

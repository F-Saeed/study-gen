import appStyles from './assets/styles/App.module.css';
import LeftVector from './components/LeftVector';
import RightVector from './components/RightVector';

function App() {
  return (
    <div className={appStyles.App}>
      <LeftVector /> {/* Left sided Vector */}
      <div style={{ width: '100vw' }}></div>
      <RightVector /> {/* Right sided Vector */}
    </div>
  );
}

export default App;

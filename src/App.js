import appStyles from './assets/styles/App.module.css';
import Main from './components/Main';
import LeftVector from './components/vector-components/LeftVector';
import RightVector from './components/vector-components/RightVector';

function App() {
  return (
    <div className={appStyles.App}>
      <LeftVector /> {/* Left sided Vector */}
      <RightVector /> {/* Right sided Vector */}
      <Main />
    </div>
  );
}

export default App;

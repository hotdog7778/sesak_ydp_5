import './App.css';
import SyntheticEvent from './components/SyntheticEvent';
import ClassBind from './components/ClassBind';
import Counter from './components/Counter';
import HandlerEx from './ex/HandlerEx';
import ColorChange from './components/ColorChange';
import InvisibleFunc from './components/InvisibleFunc';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <br />
      <ClassBind />
      <br />
      <Counter />
      <br />
      <HandlerEx />
      <br />
      <ColorChange />
      <br />
      <InvisibleFunc />
      <br />
    </div>
  );
}

export default App;

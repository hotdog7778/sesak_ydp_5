import './App.css';
import SyntheticEvent from './components/SyntheticEvent';
import ClassBind from './components/ClassBind';
import Counter from './components/Counter';
import HandlerEx from './ex/HandlerEx';
import ColorChange from './components/ColorChange';
import InvisibleFunc from './components/InvisibleFunc';
import TestThis from './components/WhatIsThis';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <br />
      <ClassBind />
      <br />
      <TestThis name="tgkim"/>
      <br />
      <FunctionComponent />
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

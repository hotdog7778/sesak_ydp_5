import './App.css';
import Counter from './components/Counter';
import SayFunction from './components/SayFunction';
import CounterFunction from './components/CounterFunction';
import ClassComponentPrac1 from './components/ClassComponentPrac1';
import FuncComponentPrac1 from './components/FuncComponentPrac1';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <ClassComponentPrac1 />
      <hr />
      <FuncComponentPrac1 />
      <hr />
    </div>
  );
}

export default App;

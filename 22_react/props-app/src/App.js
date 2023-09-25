import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent /> */}
      <FunctionComponent name="함수형 컴포넌트" />
      {/* <FunctionComponent name={true} /> */}
      <hr />
      {/* <ClassComponent /> */}
      <ClassComponent name="클래스형 컴포넌트" />
      {/* <ClassComponent name={true} /> */}
      <hr />
      <Button link="https://www.google.com">구글</Button>
    </div>
  );
}

export default App;

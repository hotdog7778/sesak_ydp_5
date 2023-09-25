import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import ClassComponent2 from './components/ClassComponent2';
import Button from './components/Button';
import Test from './components/Test';
import Test2 from './components/Test2';
import Food from './components/Food';

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
      <hr />
      <Test />
      <hr />
      <Test2 />
      <hr />
      <Food likeFood="사과" />
      <hr />
      <ClassComponent2 text="테스트" valid="consoleLog" />
    </div>
  );
}

export default App;

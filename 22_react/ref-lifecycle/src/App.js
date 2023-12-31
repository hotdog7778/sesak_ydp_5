import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSampleClass from './RefSampleClass';
import RefSampleClass2 from './RefSampleClass2';
import LifeCycleClass from './LifeCycleClass';
import PostList from './PostList';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
      <hr />
      <RefSample1 />
      <hr />
      <RefSample2 />
      <hr />
      <RefSampleClass />
      <hr />
      <RefSampleClass2 />
      <hr />
      <br />
      <br />
      {/* 라이프 사이클 */}
      <LifeCycleClass />
      <hr />
      <br />
      <br />
      {/* useEffect 실습 */}
      <PostList />
    </div>
  );
}

export default App;

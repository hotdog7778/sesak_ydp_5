import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import MediaQeury from './components_sass_practice/MediaQeury';

function App() {
  return (
    <div className="App">
      <p>CSS 학습</p>
      <hr />
      <p>SASS</p>
      <SassComponent />
      <hr />
      <p>Styled-Component</p>
      <StyledComponent />
      <hr />
      <p>미디어쿼리 퀴즈 실습</p>
      <MediaQeury />
    </div>
  );
}

export default App;

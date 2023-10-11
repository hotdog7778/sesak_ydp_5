import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Lava from './components_sass_practice/Lava';
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
      <hr />
      <p>SASS 실습 - Lava</p>
      <Lava />
    </div>
  );
}

export default App;

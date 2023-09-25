// import logo from './logo.svg';
import './App.css';

function App() {
  // 여기서는 for, if 문 사용 가능

  const name = '김태균';
  const animal = '강아지';
  const animalName = '예삐';
  const student = 'sesac';
  const a = '3';
  const b = '2';
  const title = 'Hello W';

  // css 스타일 정의
  const styles = {
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: '48px',
  };

  return (
    // 여기서는 for, if 문 사용 불가능

    <div className="App">
      {/* 자동 생성 코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* 화면에 나타나지 않는 태그 */}

        {/* js 문법 사용 */}
        {/* {} 로 감싸면 js 표현식 */}
        {/* {} 안에서 삼항연산 사용 가능, if문 for문 사용 불가능 */}
        <div>{name} 안녕?</div>
        <div>{student === 'sesac' ? <span>새싹인</span> : <span>외부인</span>}</div>

        {/* style 속성 */}
        {/* - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용 */}
        {/* - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함 */}
        <div style={styles}>스타일 적용</div>
        {/* 인라인 스타일 적용 방법 */}
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            fontSize: '48px',
          }}
        >
          인라인 스타일 적용
        </div>

        {/* className 속성 사용 */}
        {/* class 속성이 아닌 className 속성 사용 */}

        {/* 원래는 닫는 태그가 없는 것들도 닫는 태그를 넣어줘야 합니다. */}
        <input></input>
        <input />

        {/* 실습 */}
        <div>
          이것은 div 입니다.<h1>이것은 div 안에 있는 h3태그 입니다.</h1>
        </div>
        <h2>
          <div>제 반려동물의 이름은 {animalName} 입니다.</div>
          <div>
            {animalName}는 {animal}입니다.
          </div>
        </h2>
        <div>{3 + 5 == 8 ? <p>정답입니다.</p> : <p>오답입니다.</p>}</div>
        <div>{a > b && <p>a가 b보다 큽니다.</p>}</div>
        <br></br>

        <div className="test">{title}</div>
        <p>
          아이디 : <input className="input"></input>
        </p>
        <p>
          비밀번호 : <input className="input"></input>
        </p>

        <div className="colors">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="navy"></div>
          <div className="purple"></div>
        </div>
      </>
    </div>
  );
}

export default App;

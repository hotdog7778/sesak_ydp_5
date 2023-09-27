import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('생성자 에서 this>>', this);
    // #1 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용
    // this는 호출 방식에 의해 결정되기때문에 의도하지 않은 결과를 가져올 수 있으니 bind로 this가 어느걸 가리키는지 명시해주는 것
    // this.printConsole = this.printConsole.bind(this);
  }

  // 생성자에서 this 사용시
  // printConsole() {
  //   console.log('메서드 에서 this>>', this);
  // }

  // #2 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
  // 화살표 함수에서 this는 호출방식이에 따라 바인딩되지 않고 선언된 위치에서 상위 스코프에 바인딩된다.
  printConsole = () => {
    console.log('[화살표함수로 작성된]메서드 에서 this>>', this);
  };

  printConsole2 = (msg) => {
    console.log('전달받은 인자:', msg);
  };

  render() {
    return (
      <>
        <h1>Class 컴포넌트 이벤트</h1>
        <button onClick={this.printConsole}>printConsole(인자X 경우)</button>
        <br />
        <button onClick={() => this.printConsole2('Hello')}>printConsole(인자O 경우)</button>
        {/* 이때는 인자가 함수로 제대로 넘어가지 않음 <button onClick={this.printConsole2('Hello')}>printConsole(인자O 경우)</button>  */}
        <br />
        {/* <button onClick={this.printConsole2.bind('Hello Bind')}>printConsole(인자O 경우, bind)</button> 제대로 인자가 넘어가지 않음 */}
        <button onClick={this.printConsole2.bind(null, 'Hello Bind')}>printConsole(인자O 경우, bind)</button>
      </>
    );
  }
}

export default ClassBind;

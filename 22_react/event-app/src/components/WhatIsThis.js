import { Component } from 'react';

class WhatIsThis extends Component {
  constructor() {
    super();
    // console.log("!!",this) // 생성자에서 this는 컴포넌트 자체임을 확인함
    this.normalFunc = this.normalFunc.bind(this);
  }
  
  normalFunc(msg) {
    console.log('normalFunc 실행')
    console.log(msg)
  }
  arrowFunc = (msg) => {console.log(msg)}
  
  render() {
    const msg = "하하"
    return (
      <>
        <h1>이벤트 핸들러에서 this</h1>
        {/* 이벤트 핸들러에 인자로 msg를 넘겨보기 */}
        
        {/* 방법1. 인자로 넘길 값을 bind 하는 방법 */}
        <button onClick={this.normalFunc.bind(null, msg)}>일반함수인 이벤트 핸들러에게 bind를 사용해서 인자 전달</button>
        <button onClick={this.arrowFunc.bind(null, msg)}>화살표함수인 이벤트 핸들러에게 bind를 사용해서 인자 전달</button>

        {/* 방법2. 인자로 넘길 값을 화살표 함수를 사용해서 처리 */}
        {/* 화살표 함수를 사용하면 this는 컴포넌트 자체 */}
        <button onClick={() => this.normalFunc(msg)}>일반함수인 이벤트 핸들러에게 화살표 함수를 사용해서 인자 전달</button>                
        <button onClick={() => this.arrowFunc(msg)}>화살표 함수인 이벤트 핸들러에게 화살표 함수를 사용해서 인자 전달</button>
      </>
    );
  }
}

export default WhatIsThis;
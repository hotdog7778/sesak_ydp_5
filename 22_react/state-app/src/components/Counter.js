// 클래스형 컴포넌트
import React, { Component } from 'react';

class Counter extends Component {
  // 기존 버전
  constructor(props) {
    //'super' 로 부모클래스 생성자 호출
    super(props);

    this.state = {
      number: 0,
    };
  }

  // 현재 버전
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); // state 값은 직접 변경 불가능 setState 함수를 사용해야함
          }}
        >
          set State
        </button>
        <button
          onClick={() => {
            alert(number);
          }}
        >
          alert Number
        </button>
      </div>
    );
  }
}

export default Counter;

// 클래스형 컴포넌트
import React, { Component } from 'react';

class Test2 extends Component {
  render() {
    const style = {
      color: 'green',
      fontSize: '40px',
      marginTop: '20',
    };
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"
          alt="이미지"
        ></img>
      </div>
    );
  }
}

export default Test2;

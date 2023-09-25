// 클래스형 컴포넌트
import React, { Component } from 'react';

class Test extends Component {
  render() {
    const name = '태균';
    const my_style = {
      backgroundColor: 'green',
      color: 'black',
      fontSize: '40px',
      padding: '12px',
    };
    return (
      <>
        <div style={my_style}>{name} 님 안녕하세요</div>
      </>
    );
  }
}

export default Test;

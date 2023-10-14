import React, { Component } from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // 에러가 발생하지 않았다는 state 초기값 설정
    this.state = { hasError: false };
  }

  // 이 메서드는 매개변수로 오류를 전달받고, 갱신된 state 값을 반드시 반환해야 한다.
  // 자식 컴포넌트에서 오류가 발생하면 이 메서드가 호출된다.
  static getDerivedStateFromError(error) {
    // state를 갱신하여 다음 렌더링에서 대체 UI를 표시합니다.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 별도로 작성한 대체 UI를 렌더링할 수도 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    // this.props.children은 React 컴포넌트가 부모 컴포넌트로부터 전달받은 자식 엘리먼트(또는 컴포넌트)를 나타냅니다.
    // 따라서 아래 코드는 Error Boundary 컴포넌트가 자식 컴포넌트를 그대로 렌더링하는 것을 의미한다.
    return this.props.children;
  }
}

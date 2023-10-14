import React, { useState } from 'react';

export default function MyComponent() {
  // const [error, setError] = useState(null);

  const myFunc = () => {
    // 에러 발생 코드
    throw new Error('에러 발생!');
  };

  // 컴포넌트 내에서 에러 발생 코드가 있는 함수 실행
  myFunc();

  return (
    <div>
      <h1>함수형 컴포넌트 에러 처리</h1>
    </div>
  );
}

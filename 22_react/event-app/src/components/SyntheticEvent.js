export default function SyntheticEvent() {
  function syntheticEvent(e) {
    // e는 합성이벤트 이며 네이티브 이벤트를 감싼 객체이다.
    // 네이티브 이벤트는 브라우저 마다 이벤트 이름/종류/처리방식이 다르기때문에
    // 리액트에서는 이를 처리하기 위해 네이티브 이벤트를 합성이벤트로 한번 감싼 형태로 사용한다.
    console.log('SyntheticEvent 버튼 클릭');
    console.log(e);
  }

  function printInputValue(e) {
    console.log(e.target.value); // 인풋태그에 사용자가 입력한 값
  }

  return (
    <div>
      <p>SyntheticEvent 콘솔에 찍기</p>
      <br />
      <input type="text" placeholder="입력하세요" onChange={syntheticEvent} />
      <br />
      <input type="text" placeholder="합성이벤트를 확인해보자" onChange={printInputValue} />
    </div>
  );
}

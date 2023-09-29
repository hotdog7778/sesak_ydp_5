export default function SyntheticEvent() {
  function syntheticEvent(e) {
    // e는 합성이벤트 이며 네이티브 이벤트를 감싼 객체이다.
    // 네이티브 이벤트는 브라우저 마다 이벤트 이름/종류/처리방식이 다르기때문에
    // 리액트에서는 이를 처리하기 위해 네이티브 이벤트를 합성이벤트로 한번 감싼 형태로 사용한다.
    console.log('SyntheticEvent 버튼 클릭');
    console.log(e);
    console.log(e.target); // React의 가상 DOM 내에서 이벤트가 발생한 요소
    console.log(e.nativeEvent.target); // 실제 DOM 내에서 이벤트가 발생한 요소
  }

  function printInputValue(e) {
    console.log(e.target.value); // 인풋태그에 사용자가 입력한 값
  }

  return (
    <div>
      <p>SyntheticEvent 콘솔에 찍기</p>
      <br />
      <button onClick={syntheticEvent}>e 를 콘솔에 찍어보자</button>
      <button onClick={(e) => {console.log(e)}}>e 를 콘솔에 찍어보자2</button>
      <br />
      <input type="text" placeholder="합성이벤트를 확인해보자" onChange={printInputValue} />
    </div>
  );
}

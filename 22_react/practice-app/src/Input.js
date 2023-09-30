function Input(props) {
  const {setTextContent} = props

  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value)
          setTextContent(e.target.value)
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;

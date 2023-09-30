function Result(props) {
  const { fruitImg, bgClr, clr, textContent } = props
  console.log(bgClr)
  return (
    <div style={{ display: "block" }}>
      <img src={fruitImg + ".png"} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: bgClr,
          color: clr,
        }}
      >
        {textContent}
      </div>
    </div>
  );
}

export default Result;

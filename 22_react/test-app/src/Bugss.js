function Bugss() {
  const body = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    position: 'absolute',
  };
  const body1 = {
    backgroundColor: 'rgb(63, 63, 216)',
    zIndex: '1',
    top: '15px',
    left: '15px',
  };
  const body2 = {
    backgroundColor: 'rgb(27, 27, 216)',
    zIndex: '2',
    top: '50px',
    left: '50px',
  };
  const body3 = {
    backgroundColor: 'rgb(7, 7, 93)',
    zIndex: '3',
    top: '45px',
    left: '100px',
  };
  const body4 = {
    backgroundColor: 'rgb(62, 105, 107)',
    zIndex: '4',
    top: '80px',
    left: '150px',
  };
  const body5 = {
    backgroundColor: 'rgb(208, 63, 216)',
    zIndex: '5',
    top: '120px',
    left: '180px',
  };
  const body6 = {
    backgroundColor: 'rgb(152, 216, 63)',
    zIndex: '21',
    position: 'absolute',
    top: '100px',
    left: '240px',
  };
  const eyeWhite = {
    backgroundColor: 'white',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    zIndex: '2',
    position: 'absolute',
    top: '15px',
    left: '15px',
  };
  const eyeBlack = {
    backgroundColor: 'black',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    zIndex: '3',
    position: 'absolute',
    top: '10px',
  };

  return (
    <div>
      <div positionAbsolute className="body body1" style={{ ...body, ...body1 }}>
        <div className="eye-white" style={eyeWhite}>
          <div className="eye-black" style={eyeBlack}></div>
        </div>
      </div>
      <div className="body body2" style={{ ...body, ...body2 }}></div>
      <div className="body body3" style={{ ...body, ...body3 }}></div>
      <div className="body body4" style={{ ...body, ...body4 }}></div>
      <div className="body body5" style={{ ...body, ...body5 }}></div>
      <div className="body body6" style={{ ...body, ...body6 }}></div>
    </div>
  );
}

export default Bugss;

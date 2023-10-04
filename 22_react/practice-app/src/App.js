import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  let [fruitImg, setImg] = useState('apple');
  let [bgClr, setBgClr] = useState('black')
  let [clr, setClr] = useState('white')
  let [textContent, setTextContent] = useState('글자글자')

  // or 객체 형식
  let [data, setData] = useState({
    fruitImg: 'apple',
    bgClr: 'black',
    clr: 'white',
    textContent: '글자글자',
  })

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Select setImg={setImg} setBgClr={setBgClr} setClr={setClr}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Input setTextContent={setTextContent}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Result fruitImg={fruitImg} bgClr={bgClr} clr={clr} textContent={textContent}/>
      </div>
    </>
  );
}

export default App;

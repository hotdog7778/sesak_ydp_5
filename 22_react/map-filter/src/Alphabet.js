import React, {useState} from 'react'

export default function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b','a','n','a','n','a'])

  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ])

  const [inputAlpha, setInputAlpha] = useState('')

  // 배열관련 concat 메서드
  // Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
  // const array3 = array1.concat(array2);
  // array2 가 배열형태가 아니고 문자열이어도 바로 사용 가능
  const addAlpha = () => {
    if(!inputAlpha) {
        return;
    }
    
    // alphabet.push(inputAlpha)
    const newAlpha = alphabet.concat(inputAlpha)
    //const newAlpha = alphabet.concat([inputAlpha])
    
    const newAlpha2 = [...alphabet, ...[inputAlpha]] 

    const newAlpha3 = alphabet2.concat({
        id: alphabet2.length + 1,
        alpha: inputAlpha,
    })
    setAlphabet2(newAlpha3);
    setInputAlpha('');
  }

  const deleteAlpha = (targetId) => {
    console.log(targetId)

    const newAlpha = alphabet2.filter((arr) => arr.id !== targetId)
    setAlphabet2(newAlpha)
  }

  return (
    <div>
        {
            alphabet.map((value,idx) => {
                return <li key={idx}>{value}</li> // 반복되는 태그 중 가장 상위(부모) 태그에 key 를 사용해야한다.
            })
        }
        <br/>
        
        <input 
            type='text' 
            placeholder='알파벳 입력' 
            value={inputAlpha} 
            onChange={(e)=>{
                setInputAlpha(e.target.value)
            }}
            onKeyDown={(e)=>{
                // if(e.key === 'Enter'){
                if(e.keyCode === 13){
                    addAlpha();
                }
            }}
        />
        

        <button 
            onClick={addAlpha}
        >ADD</button>

        {
            alphabet2.map((value) => {
                return <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>{value.alpha}</li> // 반복되는 태그 중 가장 상위(부모) 태그에 key 를 사용해야한다.
            })
        }
    </div>
  )
}
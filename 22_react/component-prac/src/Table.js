import React, {useState, useRef} from 'react'

export default function Table() {
  const writerRef = useRef()
  const titleRef = useRef()

  const [content, setContent] = useState([{
    idx: '번호',
    title: '제목',
    writer: '작성자'
  }])
  const [searchContent, setSearchContent] = useState([{
    idx: '번호',
    title: '제목',
    writer: '작성자'
  }])

  const [inputTitle, setInputTitle] = useState('')
  const [inputWriter, setInputWriter] = useState('')
  
  // 검색 관련
  const [search, setSearch] = useState(false)
  const [searchType, setSearchType] = useState('')
  const [searchData, setSearchData] = useState('')
  
  // 검색
  function searching(searchData) {
    if(searchType === '번호'){
        const searchedContent = content.filter((arr) => 
        arr.idx === '번호' || arr.idx === Number(searchData)
      )
      setSearchContent(searchedContent);
      setSearch(true)
    } else if (searchType === '작성자'){
        const searchedContent = content.filter((arr) => 
        arr.idx === '번호' || arr.writer === searchData
      )
      setSearchContent(searchedContent);
      setSearch(true)
    } else if (searchType === '제목'){
        const searchedContent = content.filter((arr) => 
        arr.idx === '번호' || arr.title === searchData
      )
      setSearchContent(searchedContent);
      setSearch(true)
    }
  }

  // 포커스
  function checkEmpty(ref1, ref2) {
    if(!ref1.current.value) {
        ref1.current.focus()
        return true;
    } else if (!ref2.current.value) {
        ref2.current.focus()
        return true;
    }
    return false;
  }

  return (
    <>
        <fieldset>
            작성자 : <input ref={writerRef} onChange={(e) => {
                // console.log(e.target.value)
                setInputWriter(e.target.value)
                }}/>

            제목 : <input ref={titleRef} onChange={(e) => {
                // console.log(e.target.value)
                setInputTitle(e.target.value)
                }}/>
            
            <button onClick={(e)=> {
                const isEmpty = checkEmpty(writerRef, titleRef)
                if(isEmpty){
                    return;
                }

                const tempContent = {
                    idx: content.length,
                    title: inputTitle,
                    writer: inputWriter,
                }
                
                const newContent = content.concat([tempContent])
                
                setContent(newContent)
                //setInputTitle('')
                //setInputWriter('')
            }} >작성</button>
        </fieldset>
        <br/>
        
        <select onChange={(e) => {
            // console.log(e)
            setSearchType(e.target.value)
        }}>
            <option >번호</option>
            <option >제목</option>
            <option >작성자</option>
        </select>
        
        <input placeholder='검색어' onChange={(e) => {
            setSearchData(e.target.value)
        }}/>
        <button onClick={() => {
            if(!searchType) {
                setSearchType('번호')
            }
            searching(searchData)
        }}
        >검색</button>
        
        <button onClick={() => {
            setSearch(false)
        }}>전체</button>

        <table border="1">
        <tbody>
            {
                (search ? searchContent : content).map((value) => (
                    <tr key={value.idx}>
                        <td value={value.idx}>{value.idx}</td>
                        <td value={value.writer}>{value.writer}</td>
                        <td value={value.title}>{value.title}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        
    </>
  )
}

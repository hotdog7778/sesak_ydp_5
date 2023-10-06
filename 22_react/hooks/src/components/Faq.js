import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle()
  
  return (
    <div>
      <h1>커스텀 훅 (토글기능)</h1>
      <div onClick={setIsFaqOpen} style={{cursor: 'pointer'}}>Q. 커스텀 훅 만들수 있음?</div>
      {isFaqOpen && <div>A. 네</div>}
    </div>
  )
}

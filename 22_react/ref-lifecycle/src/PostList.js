import React, {useState} from 'react'
import PostItem from './PostItem'

export default function PostList() {
  const [state, setState] = useState({
    visible: false,
  })

    return (
    <div>
        <h1>PostList</h1>
        <PostItem />
        
    </div>
  )
}

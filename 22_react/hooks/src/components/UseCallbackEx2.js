import React, {useCallback, useEffect, useState} from 'react'
import axios from 'axios';

export default function UseCallbackEx2({postId}) {
  const [post, setPost] = useState({});
  
  const getPost = useCallback(async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    console.log(res);
    setPost(res.data);
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]); // 의존성 배열에 넣은 getPost 함수는 객체로, 리렌더링 될때마다 새로 메모리에 저장되게된다. 그러면 useEffect도 계속해서 실행될테니 getPost 함수를 새로 저장하지 않고 유지하기위해 useCallback 훅을 사용한다.
  
  return (
    <div>
        <h1>UseCallbackEx2</h1>
        {post.id ? post.title : '로딩중..'}    
    </div>
  );
}

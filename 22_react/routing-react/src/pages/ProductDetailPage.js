import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  const parameter = useParams(); // 파라미터로 넘어온 값을 객체로 저장 // 구조분해
  console.log(parameter);
  const productId = parameter.productId;
  //   console.log(productId);
  //   console.log(productInfos);
  const product = productInfos.filter((rowData) => rowData.id === Number(productId));
  console.log(product);

  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId) - 1];
  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로</button>
      <ul>
        <li>상품 번호 : {id}</li>
        <li>이름 : {name}</li>
        <li>판매자 : {email}</li>
        <li>상세설명 : {body}</li>
      </ul>
    </div>
  );
}

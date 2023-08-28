// 프론트엔드 자바스크립트 코드

const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// POST 요청 (목적: DB에 저장하라고 백엔드에 데이터 넘겨주기)
const createVisitor = () => {
  const form = document.forms['visitor-form'];
  //console.log(form.name.value, form.comment.value);
  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post 요청에 대한 응답', res);
    const { id, name, comment } = res.data;
    const newVisitor = `
        <tr id="tr_8">
            <td>${id}</td>
            <td>${name}</td>
            <td>${comment}</td>
            <td><button type="button">수정</button></td>
            <td><button type="button">삭제</button></td>
        </tr>
    `;

    // 제이쿼리로 html 붙여넣기
    //$('tbody').append(newVisitor);
    // Js로 html 붙여넣기
    tbody.insertAdjacentHTML('beforeend', newVisitor); // 왜 바로 생성안되지?
  });
};

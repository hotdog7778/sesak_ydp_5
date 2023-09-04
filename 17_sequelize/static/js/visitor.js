// 프론트엔드 자바스크립트 코드

const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// POST 요청 (목적: DB에 저장하라고 백엔드에 데이터 넘겨주기)
const createVisitor = async () => {
  const form = document.forms['visitor-form'];
  //console.log(form.name.value, form.comment.value);
  await axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post 요청에 대한 응답', res);
    const { id, name, comment, createdAt, updatedAt } = res.data;
    const newVisitor = `
        <tr id="tr_8">
            <td>${id}</td>
            <td>${name}</td>
            <td>${comment}</td>
            <td><button type="button" onclick="editVisitor(${id})">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this, ${id})">삭제</button></td>
            <td><span class="created-at">${createdAt}</span></td>
            <td><span class="updated-at" id="updated-at-${id}">${updatedAt}</span></td>
        </tr>
    `;

    tbody.insertAdjacentHTML('beforebegin', newVisitor);

    editCancel();
  });
};

const deleteVisitor = (obj, id) => {
  console.log(obj, id);

  if (!confirm('삭제 하시겠습니까?')) {
    return;
  }

  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('delete 요청에 대한 응답', res.data);

    alert('삭제 성공');

    obj.parentElement.parentElement.remove();
  });
};

const editVisitor = (id) => {
  // console.log(id, '번 방명록 수정!!');

  // 방명록 전체 데이터 조회
  axios({
    method: 'get',
    url: `/visitor/${id}`,
  }).then((res) => {
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  });

  const btns = `
    <button type="button" onclick="editDo(${id})">변경</button>
    <button type="button" onclick="editCancel()">취소</button>
  `;

  buttonGroup.innerHTML = btns;
};

const editDo = (id) => {
  const form = document.forms['visitor-form'];
  axios({
    method: 'patch',
    url: '/visitor',
    data: {
      id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res);
    //window.location.reload();
    if (res.data.isUpdate) {
      alert(res.data.msg);
    }

    const tr = document.querySelector(`#tr_${id}`).children;
    tr[1].textContent = form.name.value;
    tr[2].textContent = form.comment.value;
    tr[6].innerHTML = `<td><span class="updated-at" id="updated-at-${id}">${res.data.updatedAt}</span></td>`;

    editCancel();
  });
};

function editCancel() {
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';

  const createBtn = `<button type="button" onclick="createVisitor()">등록</button>`;
  buttonGroup.innerHTML = createBtn;
}

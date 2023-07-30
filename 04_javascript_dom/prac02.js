let idx = 0;
let now = new Date();

// 작성버튼 이벤트 구현
let btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', function(){    
    idx += 1;
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('content').value;   

    if(writer.trim() === '' || content.trim() === '' ){
        return;
    }

    const table = document.querySelector('table');   
    const newTr = document.createElement('tr');
    const newTdIdx = document.createElement('td');
    const newTdWriter = document.createElement('td');
    const newTdContent = document.createElement('td');
    const newTdDate = document.createElement('td');
    
    newTdIdx.innerHTML = `<td>${idx}</td>`;
    newTdWriter.innerHTML = `<td>${writer}</td>`;
    newTdContent.innerHTML = `<tb>${content}</td>`;
    newTdDate.innerHTML = `<td>${now.toLocaleString()}</td>`;

    table.append(newTr);
    newTr.append(newTdIdx);
    newTr.append(newTdWriter);
    newTr.append(newTdContent);
    newTr.append(newTdDate);

    document.getElementById('writer').value = '';
    document.getElementById('content').value = '';
})
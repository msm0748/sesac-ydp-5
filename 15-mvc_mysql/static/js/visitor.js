const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group button');

function createVisitor() {
  const form = document.forms['visitor-form'];

  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(`post /visitor 요청에 대한 응답`, res.data);

    const { id, name, comment } = res.data;
    // 방금 추가한 방명록 정보를 보이기
    const newVisitor = `
      <tr id="tr_3">
        <td>${id}</td>
        <td>${name}</td>
        <td>${comment}</td>
        <td><button type="button">수정</button></td>
        <td><button type="button">삭제</button></td>
      </tr>
    `;

    tbody.insertAdjacentHTML('beforeend', newVisitor);
  });

  // res: id, name, comment
}

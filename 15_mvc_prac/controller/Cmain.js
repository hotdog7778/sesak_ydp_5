const member = require('../model/Member');

const mainController = (req, res) => {
  res.render('main');
};

const loginController = (req, res) => {
  if (isMember(req.body)) {
    res.status(200).send({ msg: '로그인 성공', color: 'blue' });
  } else {
    res.status(200).send({ msg: '로그인 실패', color: 'red' });
  }
};

/**
 * 아이디/패스워드 확인 요청시
 * reqBody 형식. 키값 고정
 * {
 *   reqUserId: 'exampleUser',
 *   reqUserPw: 'examplePw',
 *  }
 */
const isMember = (reqBody) => {
  const members = member.getMemberList();
  for (let i = 0; i < members.length; i++) {
    let isMatch = true;

    for (let key in reqBody) {
      if (key !== 'reqUserId' && key !== 'reqUserPw') {
        return; // Error('Bad Request'); // 요청받은 데이터의 키값이 정해진게 아니면 바로 함수 종료하고 Error 반환
      }
      if (key === 'reqUserId') {
        if (members[i].userId !== reqBody[key]) {
          isMatch = false;
        }
      }
      if (key === 'reqUserPw') {
        if (members[i].userPw !== reqBody[key]) {
          isMatch = false;
        }
      }
    }

    if (isMatch) {
      return true; // 불일치 검사를 전부 통과 했으면 함수 종료하고 true 리턴
    }
  }

  return false;
};

module.exports = {
  mainController,
  loginController,
};

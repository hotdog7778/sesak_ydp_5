const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false,
      },
      async (email, password, done) => {
        console.log('&&&&&&&&&&&&&', 'LocalStrategy 입니당.');
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser); // 비밀번호 & 이메일 검사가 OK 일때
            } else {
              done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
              // done의 인자 3개는 아래 (authError, user, info) 이다.
              // passport.authenticate('local', (authError, user, info)  << 로그인 처리 로직에서 확인할 수 있음
            }
          } else {
            done(null, false, { message: '가입되지 않은 회원입니다.' });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID, // 백엔드 도메인이 바뀔때마다 키를 다시 받아야됌
        callbackURL: '/auth/kakao/callback', // 카카오로부터 인증 결과를 받을 라우터 주소
        // 카카오에서는 인증 결과와 함께 accessToken, refreshToken, profile 을 보낸다.
        // profile에 클라이언트의 정보가 있음
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile);
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'kakao' }, // 가입이 됐는지 판단하는 기준
          });

          if (exUser) {
            // 이미 소셜 회원가입이 된 유저를 처리하는 코드
            done(null, exUser);
          } else {
            // 소셜 회원가입이 안된 유저
            const newUser = await User.create({
              email: profile._json?.kakao_account?.email, // profile.email이 undefined 일수도 있음
              nick: profile.displayName,
              snsId: profile.id,
              provider: 'kakao',
            });
            done(null, newUser);
          }
        } catch (err) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

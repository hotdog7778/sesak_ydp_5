// 회원 모델을 반환하는 함수를 만든다.
// ( , ) 안에
// 첫번째 인자로 DB연결정보를 가진 시퀄라이저를 전달
// 두번째 인자로 시퀄라이저 모듈을 전달 (이걸 왜 Datatype이라고 이름을 만드는지는 모르겠음)
const Member = (config, Sequelize) => {
  //const model = config.define( '', {}, {});
  // 첫번째 인자는 뭔가 그냥 이름같은데?
  // 두번째 인자는 컬럼의 정보
  // 세번째 인자는 테이블의 정보
  // https://sequelize.org/docs/v7/models/data-types/
  const model = config.define(
    'membor',
    {
      userid: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      pw: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      // clientSecret: {
      //   type: Sequelize.UUID,
      // },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false, // 자동생성X
    }
  );

  return model;
};

module.exports = Member;

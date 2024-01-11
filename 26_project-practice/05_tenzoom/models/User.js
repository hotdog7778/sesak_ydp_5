const User = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nick_name: {
        type: DataTypes.STRING(250),
      },
      password: {
        type: DataTypes.STRING(250),
      },
      //
      user_profile_image_path: {
        type: DataTypes.STRING(250),
      },
      status_message: {
        type: DataTypes.STRING(250),
      },
      provider: {
        type: DataTypes.ENUM('local', 'kakao', 'google'),
      },
      sns_id: {
        type: DataTypes.STRING(250),
      },
      category: {
        type: DataTypes.ENUM('초등학생', '중학생', '고등학생', '대학생'),
      },
      manager: {
        type: DataTypes.STRING(250),
      },
    },
    {
      tableName: 'user', // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      timestamps: true,
    }
  );
  return User;
};
module.exports = User;

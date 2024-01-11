const Study = (Sequelize, DataTypes) => {
  const Study = Sequelize.define(
    'Study',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      study_name: {
        type: DataTypes.STRING(250),
        // allowNull: false,
        primaryKey: true,
      },
      study_member_limit: {
        type: DataTypes.INTEGER(250),
      },
      //
      study_rule: {
        type: DataTypes.STRING(250),
      },
      password: {
        type: DataTypes.STRING(250),
      },
      category: {
        type: DataTypes.ENUM('초등학생', '중학생', '고등학생', '대학생'),
      },

      daily_target_time: {
        type: DataTypes.INTEGER(250),
      },
      study_member_limit: {
        type: DataTypes.INTEGER(250),
      },
    },
    {
      tableName: 'study', // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      timestamps: true,
    }
  );
  return Study;
};
module.exports = Study;

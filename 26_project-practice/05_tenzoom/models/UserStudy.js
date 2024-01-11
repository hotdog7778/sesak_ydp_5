// const UserStudy = (Sequelize, DataTypes) => {
//   const UserStudy = Sequelize.define(
//     'UserStudy',
//     // {
//     //   userId: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //       model: 'User',
//     //       key: 'userId',
//     //     },
//     //   },
//     //   studyId: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //       model: 'Study',
//     //       key: 'studyId',
//     //     },
//     //   },
//     // },
//     {
//       tableName: 'user_study', // 실제 db 테이블명
//       freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
//     }
//   );
//   return UserStudy;
// };
// module.exports = UserStudy;

const dbCon = require('./db.con');
const dbInsert = () => {
  console.log('dbInsert');
};
const dbUpdate = () => {
  console.log('dbUpdate');
};
const dbDelete = () => {
  console.log('dbDelete');
};
const dbSelect = () => {
  console.log('dbSelect');

  const sql = `
    SELECT * FROM noticeboard
  `;

  dbCon.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    console.log('rows', rows); //row는 배열이다.
    // console.log('fields', fields); //fields는 컬럼을 의미한다.
  });
};

module.exports = {
  dbInsert,
  dbUpdate,
  dbDelete,
  dbSelect,
};

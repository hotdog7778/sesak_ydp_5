import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
}

// 인터페이스 대신 type을 사용해도 된다.
// type StudentInfo {
//   name: string;
//   grade: number;
// }

// FC: functional component
// React.FC 를 사용할 떄는 Generic을 이용해서 props 타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//     </div>
//   );
// };

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>전공: {part || '자유 전공'}</li>
    </div>
  );
};

export default Student;

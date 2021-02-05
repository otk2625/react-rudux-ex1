import React from 'react';
import { useSelector } from 'react-redux';

const Top = () => {
  //구조분할 할당
  //store.js에서 number를 바로 꺼낼 수 있다
  const { number, username } = useSelector((store) => store);
  // const username = useSelector((store) => store.username);

  return (
    <div className="sub_container">
      <h1>Top화면</h1>
      번호 : {number}
      이름 : {username}
    </div>
  );
};

export default Top;

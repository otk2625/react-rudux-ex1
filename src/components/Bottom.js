import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store';

const Bottom = () => {
  // const dispatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>Bottom화면</h1>
      {/* 바인딩해서 넣어줘야함! */}
      {/* <Button onClick={() => dispatcher(increase('이건 바뀐값'))}>증가</Button>
      <Button onClick={() => dispatcher(decrease())}>감소</Button> */}
    </div>
  );
};

export default Bottom;

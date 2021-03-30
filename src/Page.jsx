import React from 'react';

import Button from './Button';
import List from './List';

export default function Page({ onClickAdd }) {
  const exercises = [
    { title: '팔굽혀펴기' },
    { title: '스쿼트' },
    { title: '턱걸이' },
  ];

  return (
    <>
      <header>
        운동 기록장📕
      </header>
      <Button 
      onClick={onClickAdd}
      />
      <List exercises={exercises}/>
    </>
  );
}

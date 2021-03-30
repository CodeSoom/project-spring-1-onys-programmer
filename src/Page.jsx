import React from 'react';

import Button from './Button';
import List from './List';

export default function Page({ onClickAdd }) {
  const exercises = [
    { id: 1, title: '팔굽혀펴기' },
    { id: 2, title: '스쿼트' },
    { id: 3, title: '턱걸이' },
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

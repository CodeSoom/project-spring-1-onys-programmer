import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    exercises: [
      { id: 1, title: '팔굽혀펴기' },
      { id: 2, title: '턱걸이' },
      { id: 3, title: '스쿼트' },
    ],
  });

  const [title, setTitle] = useState({
    title: '',
  });

  const { newId, exercises } = state;

  function handleClickAdd() {
    setState({
      newId: newId + 1,
      exercises: [...exercises, { id: newId, title: '새로운 운동' }],
    });
  }

  function handleChangeTitle(event) {
    console.log('change');
    setTitle({
      title: event.target.value,
    });
  }

  return (
    <Page
      exercises={exercises}
      onChangeTitle={handleChangeTitle}
      onClickAdd={handleClickAdd}
    />
  );
}

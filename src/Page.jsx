import React from 'react';

import Input from './Input';
import Button from './Button';
import List from './List';

export default function Page({ exercises, onClickAdd }) {
  return (
    <>
      <h1>
        운동 기록장📕
      </h1>
      <Input />
      <Button 
      onClick={onClickAdd}
      />
      <List exercises={exercises}/>
    </>
  );
}

import React from 'react';

import Button from './Button';

export default function Page({
  onClickAdd
}) {
  return (
    <>
      <header>
        운동 기록장📕
      </header>
      <Button 
      onClick={onClickAdd}
      />
    </>
  );
}

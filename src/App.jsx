import React from 'react';

import Page from './Page';

export default function App() {
function handleClickAdd() {
  console.log('click');
}

  return (
    <Page
    onClickAdd={handleClickAdd}
    />
  );
}

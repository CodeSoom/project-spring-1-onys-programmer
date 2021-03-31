import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Page from './Page';

const handleClickAdd = jest.fn();

test('Page', () => {
  const exercises = [
    { id: 1, title: '팔굽혀펴기' },
    { id: 2, title: '턱걸이' },
    { id: 3, title: '스쿼트' },
  ];

  const { queryByText } = render((
      <Page
      exercises={exercises}
      onClickAdd={ handleClickAdd }
      />
    ));

  expect(queryByText(/운동 기록장/)).not.toBeNull;
  expect(queryByText('추가')).not.toBeNull;

  fireEvent.click(queryByText('추가'));

  expect(handleClickAdd).toBeCalled();
});

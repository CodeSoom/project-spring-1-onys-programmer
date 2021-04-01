import React from 'react';

import { fireEvent, queryByPlaceholderText, render } from '@testing-library/react';

import Page from './Page';

const handleClickAdd = jest.fn();
const handleChangeTitle = jest.fn();

test('Page', () => {
  const exercises = [
    { id: 1, title: '팔굽혀펴기' },
    { id: 2, title: '턱걸이' },
    { id: 3, title: '스쿼트' },
  ];

  const { queryByText, queryByPlaceholderText } = render((
      <Page
      exercises={exercises}
      onChangeTitle={handleChangeTitle}
      onClickAdd={handleClickAdd}
      />
    ));

  expect(queryByText(/운동 기록장/)).not.toBeNull;
  expect(queryByText('추가')).not.toBeNull;

  fireEvent.click(queryByText('추가'));
  expect(handleClickAdd).toBeCalled();

  expect(queryByPlaceholderText('운동 이름을 입력하세요')).not.toBeNull;
  fireEvent.change(queryByPlaceholderText('운동 이름을 입력하세요'), { target: { value: 'a' } });
  expect(handleChangeTitle).toBeCalled();
  
});

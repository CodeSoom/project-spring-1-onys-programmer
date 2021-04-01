import React from 'react';

import { fireEvent, queryByPlaceholderText, render } from '@testing-library/react';

import Page from './Page';
import { ContextReplacementPlugin } from 'webpack';

const handleClickAdd = jest.fn();
const handleChangeTitle = jest.fn();

describe('Page', () => {
  const exercises = [
    { id: 1, title: '팔굽혀펴기' },
    { id: 2, title: '턱걸이' },
    { id: 3, title: '스쿼트' },
  ];

  function renderPage() {
    return (
      render((
        <Page
          exercises={exercises}
          onChangeTitle={handleChangeTitle}
          onClickAdd={handleClickAdd}
        />
      ))
    );
  }

  const { queryByPlaceholderText } = renderPage();

  it('recieves input value', () => {
    expect(queryByPlaceholderText('운동 이름을 입력하세요')).not.toBeNull;

    fireEvent.change(
      queryByPlaceholderText('운동 이름을 입력하세요'),
      { target: { value: 'a' } }
    );

    expect(handleChangeTitle).toBeCalled();
  });

  it('adds an exercise', () => {
    const { queryByText } = renderPage();

    expect(queryByText('추가')).not.toBeNull;

    fireEvent.click(queryByText('추가'));
    
    expect(handleClickAdd).toBeCalled();
  })
});

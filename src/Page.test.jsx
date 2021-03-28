import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Page from './Page';

const handleClickAdd = jest.fn();

test('Page', () => {
  const { queryByText } = render((
      <Page
      onClickAdd={ handleClickAdd }
      />
    ));

  expect(queryByText(/운동 기록장/)).not.toBeNull;
  expect(queryByText('추가')).not.toBeNull;

  fireEvent.click(queryByText('추가'));

  expect(handleClickAdd).toBeCalled();
});

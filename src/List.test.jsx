import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const exercises = [
    { id: 1, title: '팔굽혀펴기' },
    { id: 2, title: '스쿼트' },
    { id: 3, title: '턱걸이' },
  ];

  const { queryByText } = render((
      <List exercises={exercises} />
    ));

  expect(queryByText('팔굽혀펴기')).not.toBeNull;
  expect(queryByText('스쿼트')).not.toBeNull;
  expect(queryByText('턱걸이')).not.toBeNull;
});

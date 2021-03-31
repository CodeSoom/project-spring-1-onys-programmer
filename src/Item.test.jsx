import React from 'react';

import { render } from "@testing-library/react";

import Item from './Item';

test('Item', () => {
  const exercise = [
    { id: 1, title: '팔굽혀펴기' },
  ];

  const { queryByText } = render((
    <Item
      key={exercise.id}
      exercise={exercise}
    />
  ));

  expect(queryByText('팔굽혀펴기')).not.toBeNull;
});

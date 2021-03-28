import { render } from '@testing-library/react';

import React from 'react';

import Button from './Button';

test('Button', () => {
  const { container } = render((
    <Button />
  ));
  expect(container).toHaveTextContent('추가');
});

import { render } from '@testing-library/react';

import React from 'react';

import Button from './Button.jsx';

import '@testing-library/jest-dom';


test('Button', () => {
  const { container } = render((
    <Button />
  ));
  expect(container).toHaveTextContent('추가');
});

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './App';

test('App', () => {
  const { container } = render((
      <App />
    ));

  expect(container).toHaveTextContent(/운동 기록장/);
  expect(container).toHaveTextContent('추가');
});

import React from 'react';

import { render } from "@testing-library/react";

import Item from './Item';

test('Item', () => {
  render((
    <Item />
  ));
});

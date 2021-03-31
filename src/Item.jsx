import React from 'react';

export default function Item({ exercise: { title } }) {
  return (
  <li>
    {title}
  </li> 
  );
}

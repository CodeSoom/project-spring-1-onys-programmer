import React from 'react';

import Item from './Item';

export default function List({ exercises }) {
  return (
    <ol>
      {exercises.map(exercise => (
        <Item
          key={exercise.id}
          title={exercise.title}
        />
      ))}
    </ol>
  );
}

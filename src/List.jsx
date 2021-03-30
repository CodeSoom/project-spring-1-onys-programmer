import React from 'react';

export default function List({ exercises }) {
  return (
    <ol>
      {exercises.map(exercise => (
        <li key={exercise.id}>
          {exercise.title}
        </li>
      ))}
    </ol>
  );
}

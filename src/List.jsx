import React from 'react';

export default function List({ exercises }) {
  return (
    <div>
      {exercises.map(exercise => (
        <p>
          {JSON.stringify(exercise)}
        </p>
      ))}
    </div>
  );
}
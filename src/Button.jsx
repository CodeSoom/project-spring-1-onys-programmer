import React from 'react';

export default function Button({
  onClick
}) {
  return (
    <button 
    type="button"
    onClick={onClick}
    >
      추가
    </button>
  );
}

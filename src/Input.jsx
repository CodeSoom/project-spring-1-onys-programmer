import React from 'react';

export default function Input({ onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="운동 이름을 입력하세요"
        onChange={onChange}
      />
    </>
  );
}

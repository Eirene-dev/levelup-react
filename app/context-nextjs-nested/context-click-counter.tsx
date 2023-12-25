'use client';

import { useCounter } from './counter-context';
import React from 'react';
import { Boundary } from './boundary';

const ContextClickCounter = () => {
  const [count, setCount] = useCounter();

  return (
    <Boundary
      labels={['클라이언트 컴포넌트: 카운터 컨텍스트 버튼']}
      type="client"
      size="small"
    >
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg tabular-nums hover:bg-gray-500 hover:text-white"
      >
        {count} 번 클릭
      </button>
    </Boundary>
  );
};

export const Counter = () => {
  const [count] = useCounter();

  return (
    <Boundary
      labels={['클라이언트 컴포넌트: 카운터 컨텍스트 현황']}
      type="client"
      size="small"
    >
      <div className="text-xl font-bold text-black span">
        <span className="tabular-nums">{count}</span> 번 클릭됨
      </div>
    </Boundary>
  );
};

export default ContextClickCounter;

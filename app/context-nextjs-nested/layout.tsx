
import { Boundary } from './boundary';
import { CounterProvider } from '@/app/context/counter-context';
import React from 'react';
import ContextClickCounter from './context-click-counter';

const title = 'Client Context';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <Boundary
      labels={['서버 컴포넌트: 최상위 레이아웃']}
      type="server"
      size="small"
    >
      <Boundary
        labels={['클라이언트 컴포넌트: 카운터 컨텍스트 프로바이더']}
        type="client"
        size="small"
      >
        <CounterProvider>
          <Boundary
            labels={['서버 컴포넌트: 페이지']}
            type="server"
            size="small"
          >
            <div className="space-y-9">

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}

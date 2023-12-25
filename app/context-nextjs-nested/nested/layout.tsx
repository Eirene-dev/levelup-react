
import { Boundary } from '../boundary';
import { Counter } from '../context-click-counter';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {

  return (
    <Boundary
      labels={['서버 컴포넌트: 레이아웃']} 
      type="server">
      <div className="space-y-9">

        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  );
}

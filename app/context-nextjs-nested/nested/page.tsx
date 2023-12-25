
import { Boundary } from '../boundary';
import { Counter } from '../context-click-counter';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  return (
    <Boundary labels={['서버 컴포넌트: 페이지']} type="server">
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-800/80">
          모든 aaa
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}

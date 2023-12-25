import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <h1 className="text-xl font-bold">리액트 컨텍스트</h1>

      <a href={'context/nested'} className='px-3 py-1 text-sm font-medium'>
        기존 `a` 태그를 이용한 링크
      </a>

      <Link href={'context/nested'} className='px-3 py-1 text-sm font-medium'>
        Next.js Link 컴포넌트를 활용한 링크
      </Link>

    </main>
  );
}

import Link from "next/link";
import { Counter, ContextClickCounterMinus } from './context-click-counter';

export default function Page() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <h1 className="text-xl font-bold">리액트 컨텍스트</h1>
      <ContextClickCounterMinus />
      <Counter />
    </main>
  );
}

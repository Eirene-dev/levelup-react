'use client';

import { menus, type Item } from './menu';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex flex-col w-full bg-white border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex items-center px-4 py-4 h-14 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >

          <h3 className="font-semibold tracking-wide text-black group-hover:text-gray-400">
            레벨업 리액트
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 flex items-center px-4 group h-14 gap-x-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-black group-hover:text-gray-400">
          메뉴
        </div>
        {isOpen ? (
          <span className="block w-12 text-gray-600" > 닫기 </span> 
        ) : (
          <span className="block w-12 text-gray-600" > 펼치기 </span> 
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="px-2 pt-5 pb-24 space-y-6">
          {menus.map((section) => {
            return (
              <div key={section.name}>
                <div className="px-3 mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className='block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-100'
    >
      {item.name}
    </Link>
  );
}

import Link from 'next/link'

import { cx } from '@/utils/helpers'
import Menu from '@/components/Menu'

export default function LeftRight({ left = <Menu />, right, full = false }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden sm:overflow-visible sm:flex-row">
      <div className="flex flex-col sm:border-r sm:border-gray-200 sm:w-350">
        <Link href="/">
          <a className="flex p-4 space-x-3 border-b border-gray-200">
            <img src="/lzl.png" alt="lzl" className="w-6 h-6 rounded" />
            <h1 className="font-mono font-bold">LZL · 李尊龙</h1>
          </a>
        </Link>
        <aside className="flex-1 hidden p-4 overflow-y-auto sm:block">
          {left}
        </aside>
      </div>
      <div className="flex-1 overflow-y-auto">
        <article className={cx('p-4', full ? 'w-full' : 'sm:max-w-512')}>
          {right}
        </article>
        <aside className="block p-4 border-t border-gray-200 sm:hidden">
          {left}
        </aside>
      </div>
    </div>
  )
}

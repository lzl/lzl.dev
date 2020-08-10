import LoremIpsum from '@components/LoremIpsum'

export default function LeftRight({ left, right }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden sm:overflow-visible sm:flex-row">
      <div className="flex flex-col sm:border-r sm:border-gray-200 sm:w-350">
        <div className="p-4 border-b border-gray-200">
          <h1 className="font-bold">LZL · 李尊龙</h1>
        </div>
        <aside className="flex-1 hidden p-4 overflow-y-auto sm:block">
          <div className="prose">{left ? left : <LoremIpsum />}</div>
        </aside>
      </div>
      <div className="flex-1 overflow-y-auto">
        <article className="p-4 prose sm:max-w-512 md:prose-lg">
          {right ? right : <LoremIpsum />}
        </article>
        <aside className="block p-4 border-t border-gray-200 sm:hidden">
          <div className="prose">{left ? left : <LoremIpsum />}</div>
        </aside>
      </div>
    </div>
  )
}

import LoremIpsum from '@components/LoremIpsum'

export default function LeftRight({ left, right }) {
  return (
    <div className="block h-screen sm:overflow-hidden sm:flex">
      <div className="p-4 overflow-y-auto sm:border-r sm:border-gray-200 sm:w-350">
        <h1 className="mb-4 font-bold">LZL · 李尊龙</h1>
        <div className="prose">{left ? left : <LoremIpsum />}</div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <article className="prose max-w-512 md:prose-lg">
          {right ? right : <LoremIpsum />}
        </article>
      </div>
    </div>
  )
}

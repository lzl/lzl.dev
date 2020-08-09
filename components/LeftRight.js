import LoremIpsum from '@components/LoremIpsum'

export default function LeftRight({ left, right }) {
  return (
    <div className="block h-screen sm:overflow-hidden sm:flex">
      <div className="p-4 space-y-4 overflow-y-auto sm:border-r sm:border-gray-200 sm:w-350">
        <p>LZL · 李尊龙</p>
        {left ? left : <LoremIpsum />}
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="max-w-512">{right ? right : <LoremIpsum />}</div>
      </div>
    </div>
  )
}

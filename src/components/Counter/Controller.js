export default function Controller({ up, down }) {
  return (
    <div className="space-x-2">
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
    </div>
  )
}

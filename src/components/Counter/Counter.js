export default function Counter({ name, value }) {
  return (
    <div className="flex space-x-2">
      <div>{name}:</div>
      <div>{value}</div>
    </div>
  )
}

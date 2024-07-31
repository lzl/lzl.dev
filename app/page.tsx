import Counter from './counter'

export default function Home() {
  return (
    <main className="p-2">
      <div className="flex gap-1">
        <p>Hello world</p>
        <Counter />
      </div>
    </main>
  )
}

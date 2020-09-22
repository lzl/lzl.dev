import LeftRight from '@/components/LeftRight'
import Menu from '@/components/Menu'

function Page() {
  return <p>Go!</p>
}

export default function Index() {
  return <LeftRight left={<Menu />} right={<Page />} />
}

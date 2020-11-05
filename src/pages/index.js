import LeftRight from '@/components/LeftRight'

function Left() {
  return <p>Next</p>
}

function Right() {
  return <p>JS</p>
}

export default function Index() {
  return <LeftRight left={<Left />} right={<Right />} />
}

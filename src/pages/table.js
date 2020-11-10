import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import useAuth from '@/hooks/useAuth'

function Right() {
  useAuth()

  return <div>Table</div>
}

export default function Table() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}

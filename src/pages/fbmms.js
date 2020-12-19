import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import { useUserInfo } from '@/hooks/useAPI'

function Right() {
  const { isLoading, error, data } = useUserInfo()
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default function PostsPage() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}

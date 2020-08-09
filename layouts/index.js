import LeftRight from '@components/LeftRight'

export default function Index() {
  return ({ children }) => {
    return <LeftRight right={children} />
  }
}

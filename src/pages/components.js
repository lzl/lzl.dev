import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import { Button, ButtonGroup } from '@/components/Button'

function Right() {
  return (
    <div className="space-y-4">
      <div className="flex items-end space-x-2">
        <Button size="sm">发送提醒</Button>
        <Button>保存</Button>
        <Button size="lg">提交</Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button variant="solid" size="sm">
          发送提醒
        </Button>
        <Button variant="solid">保存</Button>
        <Button variant="solid" size="lg">
          提交
        </Button>
      </div>
      <div className="space-y-2">
        <Button fullWidth>登录</Button>
        <Button variant="solid" fullWidth>
          登录
        </Button>
      </div>
    </div>
  )
}

export default function Profile() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}

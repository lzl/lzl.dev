import LeftRight from '@/components/LeftRight'
import { useState } from 'react'

import Menu, { profileMenu } from '@/components/Menu'
import { Button, ButtonGroup } from '@/components/Button'
import { ChevronRightIcon, HomeIcon } from '@/components/Icon'

function Right() {
  const [isLoading, setIsLoading] = useState(false)

  function handleClick() {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-end space-x-2">
        <Button size="sm" isLoading={isLoading} onClick={handleClick}>
          发送提醒
        </Button>
        <Button>保存</Button>
        <Button size="lg">提交</Button>
        <Button size="lg" color="red">
          提交
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button variant="solid" size="sm">
          发送提醒
        </Button>
        <Button variant="solid">回到首页</Button>
        <Button variant="solid" size="lg">
          提交
        </Button>
        <Button variant="solid" size="lg" color="red">
          删除
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button variant="simple" size="sm">
          发送提醒
        </Button>
        <Button variant="simple">回到首页</Button>
        <Button variant="simple" size="lg">
          提交
        </Button>
        <Button variant="simple" size="lg" color="red">
          提交
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button size="sm" leftIcon={<HomeIcon />}>
          发送提醒
        </Button>
        <Button
          variant="solid"
          isLoading={isLoading}
          leftIcon={<HomeIcon />}
          onClick={handleClick}
        >
          回到首页
        </Button>
        <Button variant="solid" size="lg" leftIcon={<HomeIcon />}>
          提交
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button size="sm" rightIcon={<ChevronRightIcon />}>
          发送提醒
        </Button>
        <Button variant="solid" rightIcon={<ChevronRightIcon />}>
          回到首页
        </Button>
        <Button
          variant="solid"
          size="lg"
          rightIcon={<ChevronRightIcon />}
          isLoading={isLoading}
          onClick={handleClick}
        >
          提交
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button size="sm" isLoading onClick={() => console.log('发送提醒')}>
          发送提醒
        </Button>
        <Button variant="solid" isLoading>
          回到首页
        </Button>
        <Button
          variant="solid"
          size="lg"
          isLoading
          rightIcon={<ChevronRightIcon />}
          color="red"
        >
          提交
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <Button size="sm" isDisabled onClick={() => console.log('发送提醒')}>
          发送提醒
        </Button>
        <Button variant="solid" isDisabled>
          回到首页
        </Button>
        <Button
          variant="solid"
          size="lg"
          isDisabled
          rightIcon={<ChevronRightIcon />}
        >
          提交
        </Button>
      </div>
      <div className="space-y-2">
        <Button isFullWidth>登录</Button>
        <Button variant="solid" isFullWidth>
          登录
        </Button>
      </div>
      <div className="flex items-end space-x-2">
        <ButtonGroup
          size="sm"
          items={[{ name: '年' }, { name: '月' }, { name: '日' }]}
        />
        <ButtonGroup items={[{ name: '年' }, { name: '月' }, { name: '日' }]} />
        <ButtonGroup
          size="lg"
          items={[{ name: '年' }, { name: '月' }, { name: '日' }]}
        />
      </div>
      <div className="flex items-end justify-center space-x-2">
        <ButtonGroup
          dropdown
          items={[{ name: '开发中' }, { name: '提测中' }, { name: '已部署' }]}
        />
        <ButtonGroup
          dropdown
          size="lg"
          items={[{ name: '开发中' }, { name: '提测中' }, { name: '已部署' }]}
        />
      </div>
    </div>
  )
}

export default function Profile() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}

import { useState } from 'react'

import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import { Button, ButtonGroup } from '@/components/Button'
import {
  BellIcon,
  ChevronRightIcon,
  HomeIcon,
  ShareIcon,
  TrashIcon,
} from '@/components/Icon'
import { PinInput, PinInputField } from '@/components/Input'
import { Badge } from '@/components/Badge'
import { Select } from '@/components/Select'

function Panel({ id, name, open, children }) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <section id={id} className="space-y-4">
      <button
        className="text-xl font-bold"
        onClick={() => setIsOpen((o) => !o)}
      >
        {name}
      </button>
      {isOpen && <article className="space-y-4">{children}</article>}
    </section>
  )
}

function Right() {
  const [isLoading, setIsLoading] = useState(false)

  function handleClick() {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-8">
      <Panel id="select" name="选择框 Select" open>
        <Select />
      </Panel>
      <Panel id="badge" name="标签 Badge" open>
        <div className="flex items-end space-x-2">
          <Badge size="sm">优秀</Badge>
          <Badge size="sm" hasDot>
            优秀
          </Badge>
          <Badge>优秀</Badge>
          <Badge hasDot>优秀</Badge>
        </div>
        <div className="flex items-end space-x-2">
          <Badge size="sm" color="indigo">
            优秀
          </Badge>
          <Badge size="sm" color="indigo" hasDot>
            优秀
          </Badge>
          <Badge color="indigo">优秀</Badge>
          <Badge color="indigo" hasDot>
            优秀
          </Badge>
        </div>
        <div className="flex items-end space-x-2">
          <Badge size="sm" rounded="sm">
            优秀
          </Badge>
          <Badge size="sm" hasDot rounded="sm">
            优秀
          </Badge>
          <Badge rounded="sm">优秀</Badge>
          <Badge hasDot rounded="sm">
            优秀
          </Badge>
        </div>
        <div className="flex items-end space-x-2">
          <Badge size="sm" rounded="sm" canDelete>
            优秀
          </Badge>
          <Badge size="sm" hasDot rounded="sm" canDelete>
            优秀
          </Badge>
          <Badge rounded="sm" canDelete>
            优秀
          </Badge>
          <Badge hasDot rounded="sm" canDelete>
            优秀
          </Badge>
        </div>
      </Panel>
      <Panel id="button" name="按钮 Button" open>
        <div className="flex items-end space-x-2">
          <Button size="sm" isLoading={isLoading} onClick={handleClick}>
            发送提醒
          </Button>
          <Button>保存</Button>
          <Button size="lg">提交</Button>
          <Button size="lg" color="red">
            删除
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
          <Button
            variant="simple"
            size="lg"
            color="red"
            leftIcon={<TrashIcon />}
          >
            删除
          </Button>
        </div>
        <div className="flex items-end space-x-2">
          <Button size="sm" leftIcon={<BellIcon />}>
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
          <Button variant="solid" size="lg" leftIcon={<ShareIcon />}>
            分享
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
          <Button variant="solid" size="lg" isLoading color="red">
            删除
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
          <ButtonGroup
            items={[{ name: '年' }, { name: '月' }, { name: '日' }]}
          />
          <ButtonGroup
            size="lg"
            items={[{ name: '年' }, { name: '月' }, { name: '日' }]}
          />
        </div>
        <div className="flex items-end justify-center space-x-2">
          <ButtonGroup
            dropdown
            items={[
              { name: '开发中' },
              { name: '提测中', leftIcon: <ShareIcon variant="solid" /> },
              { name: '已部署' },
            ]}
          />
          <ButtonGroup
            dropdown
            size="lg"
            items={[
              { name: '开发中' },
              { name: '提测中', leftIcon: <ShareIcon variant="solid" /> },
              { name: '已部署' },
            ]}
          />
        </div>
      </Panel>
      <Panel id="input" name="输入框 Input" open>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Panel>
    </div>
  )
}

export default function Profile() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}

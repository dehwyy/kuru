'use client'

import { Components } from '@/app/lib/const'
import { Center, Container, Group, Menu, Text } from '@mantine/core'
import { useState } from 'react'

export default function Settings() {
  const items = [
    { label: 'Invite people', href: '/' },
    { label: 'Settings', href: '/' },
    { label: 'Privacy settings', href: '/' },
    { label: 'Delete', href: '/' },
  ]

  const [isOpened, setOpened] = useState(false)

  return (
    <Group
      className="font-base"
      fz={20}>
      <Menu
        onChange={e => setOpened(e)}
        width={Components.ChannelsBarWidth}>
        <Menu.Target>
          <Group
            className={`${isOpened && '!bg-[var(--mantine-color-dark-4)]'} cursor-pointer bg-[var(--mantine-color-dark-6)] hover:bg-[var(--mantine-color-dark-4)] transition-colors`}
            m={0}
            p="md"
            w={Components.ChannelsBarWidth}>
            <Text
              fz="md"
              fw="bold">
              dehwyy's server
            </Text>
          </Group>
        </Menu.Target>
        <Menu.Dropdown
          bg="dark.7"
          w={Components.ChannelsBarWidth - 20}>
          {items.map(item => (
            <Menu.Item
              key={item.label}
              className="font-base hover:bg-[var(--mantine-color-dark-5)] transition-colors">
              {item.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <p>#chat</p>
    </Group>
  )
}

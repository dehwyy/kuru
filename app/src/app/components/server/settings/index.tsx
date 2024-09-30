'use client'

import { Components } from '@/app/lib/const'
import { Center, Container, Group, Menu, Text } from '@mantine/core'

export default function Settings() {
  return (
    <Group
      className="font-base"
      fz={20}>
      <Menu width={Components.ChannelsBarWidth}>
        <Menu.Target>
          <Group
            className="cursor-pointer bg-[var(--mantine-color-dark-6)] hover:bg-[var(--mantine-color-dark-4)] transition-colors"
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
          bg="dark.8"
          w={Components.ChannelsBarWidth - 20}>
          <Menu.Item
            fz="sm"
            className="hover:bg-[var(--mantine-color-dark-7)] transition-colors font-base">
            Settings
          </Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <p>#chat</p>
    </Group>
  )
}

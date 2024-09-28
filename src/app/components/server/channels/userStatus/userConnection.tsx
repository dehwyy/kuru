import { ActionIcon, Box, Group, Text } from '@mantine/core'

export default function UserConnection() {
  return (
    <Group justify="space-between">
      <Text
        c="green.5"
        td="underline">
        Stable
      </Text>
      <ActionIcon
        color="red.6"
        radius="xl"></ActionIcon>
    </Group>
  )
}

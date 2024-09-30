import { PhoneEndIcon } from '@/app/components/icons'
import { Components } from '@/app/lib/const'
import { ActionIcon, Box, Group, Text } from '@mantine/core'

export default function UserConnection() {
  return (
    <Group justify="space-between">
      <Text
        c="green.5"
        td="underline">
        Stable
      </Text>
      <ActionIcon variant="transparent">
        <PhoneEndIcon
          className="stroke-red-500"
          w={Components.IconBaseSize}
          h={Components.IconBaseSize}
        />
      </ActionIcon>
    </Group>
  )
}

import { VolumeIcon } from '@/app/components/icons'
import { Components } from '@/app/lib/const'
import { ActionIcon, Group, Text } from '@mantine/core'

interface Props {
  name: string
}

export default function Label({ name }: Props) {
  return (
    <Group
      px={4}
      py={6}>
      <Group
        gap="sm"
        className="font-base">
        <VolumeIcon
          h={Components.IconBaseSize}
          w={Components.IconBaseSize}
        />
        <Text className="text-md">{name}</Text>
      </Group>
    </Group>
  )
}

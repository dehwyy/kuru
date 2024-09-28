import { ActionIcon, Group, Text } from '@mantine/core'

interface Props {
  name: string
}

export default function Label({ name }: Props) {
  return (
    <Group px="sm">
      <Group
        gap="sm"
        className="font-base">
        <Text>{`i`}</Text>
        <Text className="text-xl">{name}</Text>
      </Group>
      <Group
        gap={2}
        className="ml-auto">
        {[{}, {}, {}].map(() => (
          <ActionIcon size="sm"></ActionIcon>
        ))}
      </Group>
    </Group>
  )
}

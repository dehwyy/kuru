import MicrophoneOff from '@/app/components/icons/microphoneOff'
import { ActionIcon, Avatar, Container, Group, Text } from '@mantine/core'

export default function Member() {
  return (
    <Group
      pl={26}
      px="sm"
      gap="0">
      <Avatar
        size="sm"
        src="/image.png"
      />
      <Container
        m="0"
        pl="sm">
        <Text className="font-base">dehwyy</Text>
      </Container>
      <Container
        m="0"
        p="0"
        className="!ml-auto">
        <MicrophoneOff
          w={20}
          h={20}
          className="stroke-red-500"
        />
      </Container>
    </Group>
  )
}

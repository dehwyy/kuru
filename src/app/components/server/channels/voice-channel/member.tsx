import { Button } from '$/global'
import MicrophoneOff from '@/app/components/icons/microphoneOff'
import { Components } from '@/app/lib/const'
import { ActionIcon, Avatar, Container, Group, Text } from '@mantine/core'

export default function Member() {
  return (
    <Button className="ml-[12px]">
      <Group
        px="md"
        py="4"
        gap="0">
        <Avatar
          size="sm"
          src="/image.png"
        />
        <Container
          m="0"
          pl="sm">
          <Text className="font-base text-sm">dehwyy</Text>
        </Container>
        <Container
          m="0"
          p="0"
          className="!ml-auto">
          <MicrophoneOff
            w={Components.IconSmallSize}
            h={Components.IconSmallSize}
            className="stroke-red-500"
          />
        </Container>
      </Group>
    </Button>
  )
}

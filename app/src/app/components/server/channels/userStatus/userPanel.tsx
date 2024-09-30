import { HeadphonesOffIcon, MicrophoneIcon, SettingsIcon } from '$/icons'
import { Avatar, ActionIcon, Container, Group, Text, UnstyledButton } from '@mantine/core'

export default function User() {
  return (
    <Group gap="0">
      <Avatar src="/image.png" />
      <Container m={0}>
        <Text className="font-base font-bold text-lg">dehwyy</Text>
      </Container>
      <Group
        p={0}
        className="ml-auto !pt-0.5"
        gap="0px">
        <ActionIcon variant="transparent">
          <MicrophoneIcon
            w={16}
            h={16}
            className="fill-white"
          />
        </ActionIcon>
        <ActionIcon variant="transparent">
          <HeadphonesOffIcon
            w={20}
            h={20}
            className="stroke-white"
          />
        </ActionIcon>
        <ActionIcon variant="transparent">
          <SettingsIcon
            w={20}
            h={20}
            className="stroke-white"
          />
        </ActionIcon>
      </Group>
    </Group>
  )
}

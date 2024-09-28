import { Avatar, Container, Group, Text } from '@mantine/core'

export default function User() {
  return (
    <Group gap="0">
      <Avatar src="/image.png" />
      <Container m={0}>
        <Text className="font-base font-bold text-lg">dehwyy</Text>
      </Container>
      {/* <Container>
        <div className="w-1/2"></div>
      </Container> */}
    </Group>
  )
}

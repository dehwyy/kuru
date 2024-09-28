import { Container, Stack } from '@mantine/core'
import Item from './item'

const IMAGE = '/image.png'

export default function Navbar() {
  const items = [{}, {}, {}, {}, {}]

  return (
    <Container
      px={0}
      m={0}
      py="sm"
      h="100%">
      <Stack>
        <Stack align="center">
          {items.map((_, i) => (
            <Item
              key={i}
              imageUrl={IMAGE}
              placeholder="placeholder1"
              isSelected={i === 1}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

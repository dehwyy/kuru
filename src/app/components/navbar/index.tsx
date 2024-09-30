import { Container, Stack } from '@mantine/core'
import Item from './item'
import { useState } from 'react'

const IMAGE = '/image.png'
const DEFAULT_SELECTED_ITEM_INDEX = 1

export default function Navbar() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(DEFAULT_SELECTED_ITEM_INDEX)
  const items = [{}]

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
              setSelected={() => setSelectedItemIndex(i)}
              imageUrl={IMAGE}
              placeholder="dehwyy's server"
              isSelected={i === selectedItemIndex}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

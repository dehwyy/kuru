import { Avatar, Box, Button, Container, Group, HoverCard } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { useMemo } from 'react'

interface Props {
  imageUrl: string
  placeholder: string
  isSelected: boolean
}

export default function Item({ imageUrl, placeholder, isSelected }: Props) {
  const { hovered, ref } = useHover()

  return (
    <Group
      gap={4}
      pos="relative"
      align="normal">
      <Bar
        isHover={hovered}
        isSelected={isSelected}
      />
      <HoverCard
        position="right"
        offset={12}
        closeDelay={0}>
        <HoverCard.Target>
          <Avatar
            ref={ref}
            style={{ cursor: 'pointer' }}
            radius={isSelected ? 'lg' : '100%'}
            size={44}
            src={imageUrl}
          />
        </HoverCard.Target>
        <HoverCard.Dropdown
          bg="dark.8"
          p={6}>
          <p>{placeholder}</p>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  )
}

const Bar = ({ isHover, isSelected }: { isHover: boolean; isSelected: boolean }) => {
  const isAnyEvent = useMemo(() => {
    return isHover || isSelected
  }, [isHover, isSelected])

  const [h, m] = useMemo(() => {
    const h = isSelected ? 80 : 50
    const m = (100 - h) / 2
    return [h + '%', m + '%' + ' 0']
  }, [isHover])

  return (
    <Box
      className="transition-all rounded-sm"
      opacity={isAnyEvent ? '100' : '0'}
      bg="pink.2"
      w={4}
      pos="absolute"
      left="-8px"
      m={m}
      h={h}
    />
  )
}

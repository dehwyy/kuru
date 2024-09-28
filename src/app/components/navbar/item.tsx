import { Avatar, HoverCard } from "@mantine/core";

interface Props {
  imageUrl: string,
  placeholder: string
}

export default function Item({imageUrl, placeholder}: Props) {
  return (
    <HoverCard
      position="right"
      offset={12}
      closeDelay={0}
    >
        <HoverCard.Target>
          <Avatar size="lg" src={imageUrl} />
        </HoverCard.Target>
        <HoverCard.Dropdown bg="dark.8" p={6} >
          <p>{placeholder}</p>
        </HoverCard.Dropdown>
    </HoverCard>
  )
}

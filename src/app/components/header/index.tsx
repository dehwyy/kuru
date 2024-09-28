import Label from '@/app/components/header/label'
import { Container } from '@mantine/core'

export default function Header() {
  return (
    <Container
      px="sm"
      py={1}
      m="0">
      <Label />
    </Container>
  )
}

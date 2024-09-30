import { Stack } from '@mantine/core'
import UserPanel from './userPanel'
import UserConnection from './userConnection'

export default function UserStatus() {
  return (
    <Stack
      className="mt-auto"
      p="sm"
      bg="dark.7">
      <UserConnection />
      <UserPanel />
    </Stack>
  )
}

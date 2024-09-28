import { Group, Stack } from '@mantine/core'
import Channels from './channels'
import DefaultLayout from './layout/default'
import Settings from './settings'

export default function Server() {
  return (
    <Stack
      gap="0"
      mih="100%">
      <Settings />
      <Group
        flex={1}
        align="stretch">
        <Channels />
        {<DefaultLayout />}
      </Group>
    </Stack>
  )
}

import { Stack } from '@mantine/core'
import Label from './label'
import Member from './member'

export default function VoiceChannel() {
  return (
    <Stack>
      <Label name="Voice chat #1" />
      <Stack gap={10}>
        <Member />
        <Member />
      </Stack>
    </Stack>
  )
}

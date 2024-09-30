import { Button } from '$/global'
import { Stack } from '@mantine/core'
import Label from './label'
import Member from './member'

export default function VoiceChannel() {
  const voiceChannelMembers: number[] = []

  return (
    <Stack gap={4}>
      <Button>
        <Label name="Voice chat #1" />
      </Button>
      <Stack
        gap={0}
        pl={14}>
        {voiceChannelMembers.map((_, i) => (
          <Member key={i} />
        ))}
      </Stack>
    </Stack>
  )
}

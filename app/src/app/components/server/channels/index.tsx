import { Stack } from '@mantine/core'
import VoiceChannel from './voice-channel'
import UserStatus from './userStatus'
import { Components } from '@/app/lib/const'

export default function Channels() {
  const channels = [{ type: 'voice', name: 'Voice chat №1' }]
  return (
    <Stack
      className="select-none"
      pt="sm"
      w={Components.ChannelsBarWidth}
      bg="dark.6">
      {channels.map(c => (
        <VoiceChannel />
      ))}
      <UserStatus />
    </Stack>
  )
}

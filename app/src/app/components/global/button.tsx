import { UnstyledButton } from '@mantine/core'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className }: Props) {
  return (
    <UnstyledButton
      variant="default"
      className={className + ' hover:bg-[var(--mantine-color-dark-5)] transition-all rounded-sm m-1'}>
      {children}
    </UnstyledButton>
  )
}

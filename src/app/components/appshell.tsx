'use client'

import { AppShell, Container, useMantineColorScheme, useMantineTheme } from '@mantine/core'

import Navbar from '@/app/components/navbar'
import { Components } from '@/app/lib/const'

const AppShellComponent = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <AppShell
      navbar={{
        width: Components.NavbarWidth,
        breakpoint: 'sm',
      }}
      header={{
        height: Components.HeaderHeight,
      }}
      withBorder={false}>
      <AppShell.Header>
        <></>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container
          style={{
            borderRadius: theme.radius.md,
            minWidth: '100%',
            maxWidth: '100%',
            height: `calc(100vh - ${Components.HeaderHeight}px)`,
            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          }}
          p="md"
          m="0">
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export { AppShellComponent as AppShell }

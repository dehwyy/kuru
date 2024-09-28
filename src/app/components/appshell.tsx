'use client'

import { AppShell, Container, useMantineColorScheme, useMantineTheme } from '@mantine/core'

import Navbar from '@/app/components/navbar'
import { Colors, Components } from '@/app/lib/const'
import Header from '@/app/components/header'

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
      withBorder={false}
      bg={Colors.Layout}>
      <AppShell.Header bg={Colors.Layout}>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar bg={Colors.Layout}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main bg={Colors.Layout}>
        <Container
          style={{
            borderRadius: theme.radius.md,
            minWidth: '100%',
            maxWidth: '100%',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            height: `calc(100vh - ${Components.HeaderHeight}px)`,
            background: colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          }}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export { AppShellComponent as AppShell }

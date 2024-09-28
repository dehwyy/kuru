'use client';

import { AppShell } from "@/app/components/appshell";
import { Button, Container, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import { Components } from "./lib/const";


export default function Page() {
  const theme = useMantineTheme()
  const {colorScheme} = useMantineColorScheme()


  return (
    <AppShell>
      <Container
        style={{
          borderRadius: theme.radius.md,
          minWidth: "100%",
          maxWidth: "100%",
          height: `calc(100vh - ${Components.HeaderHeight}px)`,
          backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }}
        p="md"
        m="0"
      >
        <Button>
          Button
        </Button>
      </Container>
    </AppShell>
)
}

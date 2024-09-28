import { AppShell } from "@mantine/core";

import Navbar from "@/app/components/navbar";
import { Components } from "@/app/lib/const";

const AppShellComponent = ({ children }: { children: React.ReactNode}) => {

  return <AppShell
    navbar={{
      width: Components.NavbarWidth,
      breakpoint: "sm"
    }}
    header={{
      height: Components.HeaderHeight,
    }}
    withBorder={false}
  >
    <AppShell.Header>
      <></>
    </AppShell.Header>
    <AppShell.Navbar>
      <Navbar />
    </AppShell.Navbar>
    <AppShell.Main>
      {children}
    </AppShell.Main>
  </AppShell>
}

export {AppShellComponent as AppShell}

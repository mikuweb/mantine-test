import {
  AppShell,
  AppShellProps,
  Footer,
  Group,
  Header,
  Text,
} from "@mantine/core";
import { FC, ReactNode } from "react";

type props = AppShellProps & {
  children: ReactNode;
};

const ApplicationContainer: FC<props> = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={
        <Footer height={60} p="md">
          <Group position="apart" spacing="xl">
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>🕰️ List Time: </span>0h 25m
            </Text>
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>🎉 End Time: </span>7:51pm
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text size="xl" weight="bolder">
              Todo list
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default ApplicationContainer;

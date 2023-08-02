import { ActionIcon, Group, Title } from "@mantine/core";
import React from "react";
import { RiPlayMiniFill } from "react-icons/ri";

const Timer = () => {
  return (
    <>
      <Title
        align="center"
        order={1}
        style={{
          fontWeight: "900",
          fontSize: "4rem",
        }}
      >
        25:00
      </Title>
      <Group mt="sm" mx="auto" mb="md">
        <ActionIcon color="dark" size="xl" variant="transparent">
          -5
        </ActionIcon>
        <ActionIcon radius="xl" color="dark" size="xl" variant="filled">
          <RiPlayMiniFill />
        </ActionIcon>
        <ActionIcon color="dark" size="xl" variant="transparent">
          +5
        </ActionIcon>
      </Group>
    </>
  );
};

export default Timer;

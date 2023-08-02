import Tasks from "@/features/taskList/components/Tasks";
import Timer from "@/features/timer/components/Timer";
import {
  ActionIcon,
  Center,
  Group,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <Stack mt="-20px">
      <Stack
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
        }}
        mx="auto"
      >
        {/* Icon */}
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <AiOutlineSetting />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <RiPlayListAddFill />
          </ActionIcon>
        </Group>
        {/* Main part -center- */}
        <Center>
          {/* Vertically */}
          <Stack mt="sm">
            <Timer />
            <Tasks />
          </Stack>
        </Center>
      </Stack>
    </Stack>
  );
};

export default Home;

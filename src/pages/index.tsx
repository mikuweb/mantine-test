import Tasks from "@/components/Tasks";
import { AppButton } from "@/components/ui/AppButton";
import {
  ActionIcon,
  Button,
  Center,
  Flex,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from "next";
import React, { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiPlayListAddFill, RiPlayMiniFill } from "react-icons/ri";
import { MdRadioButtonUnchecked, MdCheckCircleOutline } from "react-icons/md";
import { Task } from "@/components/Task";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  const handleAddTask = () => {
    console.log("Add Task");
  };

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
            {/* Time */}
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
            <Text align="center">No task</Text>
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
            <AppButton mx="auto" onClick={handleAddTask}>
              Add
            </AppButton>
            <Tasks>
              <Task isCompleted={true}>完了したタスク</Task>
              <Task isCompleted={false}>未完了のタスク</Task>
            </Tasks>
            {/* Buttons */}
            <Group>
              <UnstyledButton>🙈 Hide complete</UnstyledButton>
              <UnstyledButton>🎉 Clear complete</UnstyledButton>
              <UnstyledButton>🗑️ Clear all</UnstyledButton>
            </Group>
          </Stack>
        </Center>
      </Stack>
    </Stack>
  );
};

export default Home;

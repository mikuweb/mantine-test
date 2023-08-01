import Tasks from "@/views/features/TaskList/Tasks";
import { AppButton } from "@/components/AppButton";
import {
  ActionIcon,
  Center,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from "next";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiPlayListAddFill, RiPlayMiniFill, RiAddFill } from "react-icons/ri";
import { Task } from "@/views/features/TaskList/Task";
import { AppModal } from "@/components/AppModal";
import { AppTextInput } from "@/components/AppTextInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import { taskListState } from "@/states/taskListState";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  console.log(inputValue);

  const handleSubmitTask = () => {
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
    setOpenModal(false);
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
            <AppButton
              leftIcon={<RiAddFill />}
              mx="auto"
              onClick={handleOpenModal}
            >
              タスクを追加
            </AppButton>
            <AppModal
              opened={openModal}
              title="タスクを追加"
              onClose={handleCloseModal}
            >
              <AppTextInput
                name="add task"
                value={inputValue}
                placeholder="タスクを入力..."
                onChange={(e) => setInputValue(e.target.value)}
              />
              <AppButton
                mx="auto"
                sx={{ width: "80px" }}
                onClick={handleSubmitTask}
              >
                追加
              </AppButton>
            </AppModal>
            <Tasks>
              {taskList.map((task) => (
                <Task key={task.id} isCompleted={task.isComplete}>
                  {task.text}
                </Task>
              ))}
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

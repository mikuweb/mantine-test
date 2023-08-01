import { List } from "@mantine/core";
import React, { FC, useState } from "react";
import { useStyles } from "./elements";
import { useRecoilState } from "recoil";
import { taskListState } from "@/states/taskListState";
import { Task } from "../Task";
import { v4 as uuidv4 } from "uuid";
import { AppButton } from "@/components/AppButton";
import { AppModal } from "@/components/AppModal";
import { AppTextInput } from "@/components/AppTextInput";
import { RiAddFill } from "react-icons/ri";

const Tasks: FC = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const { classes } = useStyles();

  const handleOpenModal = () => {
    setOpenAddTaskModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddTaskModal(false);
  };
  console.log(inputValue);

  const handleSubmitTask = () => {
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
    setOpenAddTaskModal(false);
  };

  return (
    <>
      <AppButton leftIcon={<RiAddFill />} mx="auto" onClick={handleOpenModal}>
        タスクを追加
      </AppButton>
      <AppModal
        opened={openAddTaskModal}
        title="タスクを追加"
        onClose={handleCloseModal}
      >
        <AppTextInput
          name="add task"
          value={inputValue}
          placeholder="タスクを入力..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AppButton mx="auto" sx={{ width: "80px" }} onClick={handleSubmitTask}>
          追加
        </AppButton>
      </AppModal>
      <List
        className={taskList.length > 0 ? classes.container : ""}
        spacing="xs"
        size="sm"
        center
      >
        {taskList.map((task) => (
          <Task key={task.id} task={task.text} isCompleted={task.isComplete} />
        ))}
      </List>
    </>
  );
};

export default Tasks;

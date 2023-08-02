import { Group, List, UnstyledButton } from "@mantine/core";
import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "@/stores/taskListState";
import { v4 as uuidv4 } from "uuid";
import { AppButton } from "@/components/AppButton";
import { AppModal } from "@/components/AppModal";
import { AppTextInput } from "@/components/AppTextInput";
import { RiAddFill } from "react-icons/ri";
import { Task } from "../Task";
import { useStyles } from "./elements";

const Tasks: FC = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const { classes } = useStyles();

  const handleAddTask = () => {
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4(), text: inputValue, isComplete: false, isEditing: false },
    ]);
    setInputValue("");
    setOpenAddTaskModal(false);
  };

  const handleEdit = (taskId: string) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, isEditing: true };
        } else {
          return task;
        }
      })
    );
  };

  const handleSubmitEdit = (taskId: string) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: inputValue, isEditing: false };
        } else {
          return task;
        }
      })
    );
    setInputValue("");
  };

  return (
    <>
      <AppButton
        leftIcon={<RiAddFill />}
        mx="auto"
        onClick={() => setOpenAddTaskModal(true)}
      >
        タスクを追加
      </AppButton>
      <AppModal
        opened={openAddTaskModal}
        title="タスクを追加"
        onClose={() => setOpenAddTaskModal(false)}
      >
        <AppTextInput
          name="Add task"
          value={inputValue}
          placeholder="タスクを入力..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AppButton mx="auto" sx={{ width: "80px" }} onClick={handleAddTask}>
          追加
        </AppButton>
      </AppModal>
      <List
        className={taskList.length > 0 ? classes.container : ""}
        spacing="xs"
        size="sm"
        center
      >
        {taskList.map((task) =>
          task.isEditing ? (
            <div className={classes.edit}>
              <AppTextInput
                name="Edit task"
                value={inputValue}
                placeholder={task.text}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <AppButton
                mx="auto"
                sx={{ padding: "5px 10px" }}
                onClick={() => handleSubmitEdit(task.id)}
              >
                修正
              </AppButton>
            </div>
          ) : (
            <Task
              key={task.id}
              task={task.text}
              isCompleted={task.isComplete}
              handleEditBtn={() => handleEdit(task.id)}
            />
          )
        )}
      </List>
      {/* Buttons */}
      <Group>
        <UnstyledButton>🙈 Hide complete</UnstyledButton>
        <UnstyledButton>🎉 Clear complete</UnstyledButton>
        <UnstyledButton>🗑️ Clear all</UnstyledButton>
      </Group>
    </>
  );
};

export default Tasks;

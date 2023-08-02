import { ActionIcon, List, ThemeIcon, UnstyledButton } from "@mantine/core";
import React, { FC } from "react";
import {
  MdCheckCircleOutline,
  MdRadioButtonUnchecked,
  MdEdit,
} from "react-icons/md";
import { useStyles } from "./elements";

type Props = {
  task: string;
  isCompleted: boolean;
  handleEditBtn: React.MouseEventHandler<HTMLButtonElement>;
};

export const Task: FC<Props> = ({ task, isCompleted, handleEditBtn }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <UnstyledButton className={classes.task}>
        <List.Item
          icon={
            <ThemeIcon
              color={isCompleted ? "teal" : "blue"}
              size={24}
              radius="xl"
            >
              {isCompleted ? (
                <MdCheckCircleOutline size="1rem" />
              ) : (
                <MdRadioButtonUnchecked size="1rem" />
              )}
            </ThemeIcon>
          }
        >
          {task}
        </List.Item>
      </UnstyledButton>
      <ActionIcon
        color="gray"
        size="xl"
        m="sm"
        variant="transparent"
        onClick={handleEditBtn}
      >
        <MdEdit size={20} />
      </ActionIcon>
    </div>
  );
};

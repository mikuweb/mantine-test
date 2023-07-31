import { List, ThemeIcon, UnstyledButton } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { useStyles } from "./elements";

type Props = {
  children: ReactNode;
  isCompleted: boolean;
};

export const Task: FC<Props> = ({ children, isCompleted }) => {
  const { classes } = useStyles();
  return (
    <UnstyledButton>
      <List.Item
        className={classes.task}
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
        {children}
      </List.Item>
    </UnstyledButton>
  );
};

import { List, ListProps } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { useStyles } from "./elements";

type props = ListProps & {
  children: ReactNode;
};
const Tasks: FC<props> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <List className={classes.container} spacing="xs" size="sm" center>
      {children}
    </List>
  );
};

export default Tasks;

import { ButtonProps, Button as MantineButton } from "@mantine/core";
import { FC, ReactNode, MouseEventHandler } from "react";
import { useStyles } from "./elements";

type Props = ButtonProps & {
  children: ReactNode;
  onClick?: MouseEventHandler;
};

export const AppButton: FC<Props> = ({ children, onClick, ...rest }) => {
  const { classes } = useStyles();

  return (
    <MantineButton
      classNames={{
        root: classes.hoverStyle,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MantineButton>
  );
};

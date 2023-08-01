import { TextInput, TextInputProps } from "@mantine/core";
import { ChangeEvent, FC } from "react";
import { useStyles } from "./elements";

type Props = TextInputProps & {
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  height?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AppTextInput: FC<Props> = ({
  name,
  value,
  placeholder,
  className,
  height,
  onChange,
  ...rest
}) => {
  const { classes } = useStyles({ height });

  return (
    <TextInput
      {...rest}
      name={name}
      className={`${classes.style} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

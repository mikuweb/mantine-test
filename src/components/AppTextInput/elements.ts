import { createStyles } from "@mantine/core";

type Params = {
  height?: number;
};

export const useStyles = createStyles((theme, { height }: Params) => ({
  style: {
    height: height !== undefined ? `${height}px` : "100%",
  },
}));

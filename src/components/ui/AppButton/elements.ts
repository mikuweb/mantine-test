import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  hoverStyle: {
    "&:not(:disabled):hover": {
      backgroundColor: "transparent",
    },
  },
}));

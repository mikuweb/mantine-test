import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  hoverStyle: {
    "&:not(:disabled):hover": {
      opacity: 0.5,
    },
  },
}));

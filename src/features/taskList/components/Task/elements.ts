import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  task: {
    margin: "5px 0",
    height: "30px",
  },
}));

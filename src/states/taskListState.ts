import { atom } from "recoil";

interface TaskItem {
  id: string;
  text: string;
  isComplete: boolean;
}

export const taskListState = atom<TaskItem[]>({
  key: "Todolist",
  default: [],
});

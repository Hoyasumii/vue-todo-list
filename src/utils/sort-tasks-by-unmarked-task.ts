import type { Task } from "@/entities";

export function sortTasksByUnmarkedTask(task1: Task, task2: Task) {
  return (task1.completed ? 1 : 0) - (task2.completed ? 1 : 0);
}

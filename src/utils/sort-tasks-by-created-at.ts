import type { Task } from "@/entities";

export function sortTasksByCreatedAt(task1: Task, task2: Task) {
  return task1.createdAt.getTime() - task2.createdAt.getTime();
}

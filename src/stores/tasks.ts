import { Task } from "@/entities";
import type { ITask } from "@/types";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTasks = defineStore("tasks-store", () => {
  const input = ref<string>("");
  const tasks = reactive<Array<Task>>([]);

  const addSimpleTask = (task: ITask) => {
    tasks.push(Task.build(task));
  };

  const addTask = () => {
    const createdTask = new Task(input.value);
    input.value = "";

    tasks.unshift(createdTask);
  }

  return { input, tasks, addTask, addSimpleTask };
});

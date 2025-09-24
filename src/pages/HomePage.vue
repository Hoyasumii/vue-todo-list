<script setup lang="ts">
import { TextInput, List, CheckButton } from '@/components';
import { TaskDTO } from '@/dtos';
import { Task } from '@/entities';
import { type ITask } from '@/types';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { AnimatePresence } from 'motion-v';
import { useAutoAnimate } from '@formkit/auto-animate/vue';

const tasks = reactive<Array<Task>>([]);
const newTask = ref<string>("");
const [parent, enable] = useAutoAnimate({ duration: 300 });

const visibleTasks = computed(() => {
  return [...tasks]
    .sort(sortTasksByCreatedAt as never)
    .sort(sortTasksByUnmarkedTask as never);
});

const sortTasksByCreatedAt = (task1: Task, task2: Task) => {
  return task1.createdAt.getTime() - task2.createdAt.getTime();
}

const sortTasksByUnmarkedTask = (task1: Task, task2: Task) => {
  return (task1.completed ? 1 : 0) - (task2.completed ? 1 : 0);
}

onMounted(() => {
  enable(false);

  const storedTasks = localStorage.getItem("tasks") || "[]";
  const unserializedTasks: Array<ITask> | object = JSON.parse(storedTasks);

  // TODO: Melhorar esse aviso de Erro
  if (!Array.isArray(unserializedTasks)) {
    throw new Error("Invalid Stored Content");
  }

  unserializedTasks.forEach((task: ITask, index) => {
    const { success } = TaskDTO.safeParse(task);
    const tasksLength = unserializedTasks.length;

    // TODO: Ajustas esse aviso de task
    if (!success) {
      throw new Error("Invalid Task");
      return;
    }

    if (task.completed) return;

    setTimeout(() => {
      tasks.push(Task.build(task));

      if (tasksLength - 1 === tasksLength) {
        setTimeout(() => {
          enable(true);
        }, tasksLength * 300);
      }

    }, (index + 1) * 300);

  });
});

watch(tasks, () => {
  const serializedTasks = tasks.map(task => task.serialize());

  localStorage.setItem("tasks", JSON.stringify(serializedTasks));
}, {
  deep: true,
});

const addTask = () => {
  const createdTask = new Task(newTask.value);
  newTask.value = "";

  tasks.unshift(createdTask);
}
</script>

<template>
  <div class="flex flex-col flex-1 gap-2">
    <AnimatePresence>
      <List v-for="(task) in visibleTasks" :key="`task-${task.id}`" @click="() => task.interact()" ref="parent">
        <template #content>
          <div class="flex gap-2 items-center">
            <CheckButton :active="task.completed" />
            <div class="min-w-11/12 flex items-center justify-start relative overflow-hidden">
              <p :data-finished="task.completed"
                class="duration-300 transition-all flex-1 data-[finished=true]:text-slate-300">{{ task.name }}</p>
              <div :data-finished="task.completed"
                class="absolute h-px min-w-full scale-y-0 data-[finished=true]:scale-y-100 duration-300 transition-all bg-transparent data-[finished=true]:bg-slate-300" />
            </div>
          </div>
        </template>
      </List>
    </AnimatePresence>
  </div>

  <TextInput @keyup.enter="addTask" v-model="newTask" placeholder="What Would you Like To do?" />
  <button @click="addTask">Add</button>
</template>

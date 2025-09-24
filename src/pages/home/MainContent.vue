<script setup lang="ts">
import { List, CheckButton } from '@/components';
import { TaskDTO } from '@/dtos';
import { Task } from '@/entities';
import { type ITask } from '@/types';
import { computed, onMounted, watch } from 'vue';
import { AnimatePresence } from 'motion-v';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import { useTasks } from '@/stores/tasks';
import { sortTasksByCreatedAt, sortTasksByUnmarkedTask } from '@/utils';

const tasksStore = useTasks();

const [parent, enable] = useAutoAnimate({ duration: 300 });

const visibleTasks = computed(() => {
  return [...tasksStore.tasks]
    .sort(sortTasksByCreatedAt as never)
    .sort(sortTasksByUnmarkedTask as never);
});

onMounted(() => {
  enable(false);

  const localTasks = localStorage.getItem("tasks") || "[]";
  const unserializedTasks: Array<ITask> | object = JSON.parse(localTasks);

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
      tasksStore.tasks.push(Task.build(task));

      if (tasksLength - 1 === tasksLength) {
        setTimeout(() => {
          enable(true);
        }, tasksLength * 300);
      }

    }, (index + 1) * 300);

  });
});

watch(tasksStore.tasks, () => {
  const serializedTasks = tasksStore.tasks.map(task => task.serialize());

  localStorage.setItem("tasks", JSON.stringify(serializedTasks));
}, {
  deep: true,
});
</script>

<template>
  <AnimatePresence>
    <List v-for="(task) in visibleTasks" :key="`task-${task.id}`" @click="() => task.interact()" ref="parent">
      <template #content>
        <div class="flex gap-2 items-center">
          <CheckButton :active="task.completed" />
          <div class="min-w-11/12 flex items-center justify-start relative">
            <p :data-finished="task.completed"
              class="duration-300 transition-all flex-1 data-[finished=true]:text-slate-300">{{ task.name }}</p>
            <div :data-finished="task.completed"
              class="absolute h-px min-w-full scale-y-0 data-[finished=true]:scale-y-100 duration-300 transition-all bg-transparent data-[finished=true]:bg-slate-300" />
          </div>
        </div>
      </template>
    </List>
  </AnimatePresence>
</template>

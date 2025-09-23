<script setup lang="ts">
import { TextInput, List, CheckButton, RemoveButton } from '@/components';
import { TaskDTO } from '@/dtos';
import { Task } from '@/entities';
import { onMounted, reactive, ref, watch } from 'vue';

const tasks = reactive<Array<Task>>([]);
const newTask = ref<string>("");

onMounted(() => {
  const storedTasks = localStorage.getItem("tasks") || "[]";
  const unserializedTasks: Array<Task> | object = JSON.parse(storedTasks);

  // TODO: Melhorar esse aviso de Erro
  if (!Array.isArray(unserializedTasks)) {
    throw new Error("Invalid Stored Content");
  }

  unserializedTasks.forEach(task => {
    const { success } = TaskDTO.safeParse(task);

    // TODO: Ajustas esse aviso de task
    if (!success) {
      throw new Error("Invalid Task");
      return;
    }

    tasks.push(Task.build(task));
  });
});

watch(tasks, () => {
  const serializedTasks = tasks.map(task => task.serialize());

  localStorage.setItem("tasks", JSON.stringify(serializedTasks));
}, {
  deep: true
});

const addTask = () => {
  const createdTask = new Task(newTask.value);
  newTask.value = "";

  tasks.push(createdTask);
}

const interact = (task: Task) => {
  task.interact();
}

</script>

<template>
  <div class="flex flex-col flex-1 gap-2">
    <List v-for="(task, index) in tasks" :key="`task-${index}`" @click="() => interact(task as Task)">
      <template #content>
        <div class="flex gap-2 items-center">
          <CheckButton :active="task.completed" />
          <p>{{ task.name }}</p>
        </div>
      </template>
      <template #postList>
        <RemoveButton />
      </template>
    </List>
  </div>

  <TextInput @keyup.enter="addTask" v-model="newTask" placeholder="What Would you Like To do?" />
  <button @click="addTask">Add</button>
</template>

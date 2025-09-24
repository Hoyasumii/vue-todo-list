<script setup lang="ts">
import { TextInput } from '@/components';
import { useTasks } from '@/stores/tasks';

const taskStore = useTasks();

</script>

<template>
  <TextInput @keyup.enter="taskStore.addTask" v-model="taskStore.input" placeholder="What Would you Like To do?" />
  <button @click="taskStore.addTask">Add</button>
</template>

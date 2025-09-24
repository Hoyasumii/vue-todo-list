<script setup lang="ts">
import { ClickableButton, TextInput } from '@/components';
import { useTasks } from '@/stores/tasks';
import { Plus } from 'lucide-vue-next';

const taskStore = useTasks();

</script>

<template>
  <div class="flex gap-2 w-full items-center" v-auto-animate>
    <TextInput @keyup.enter="taskStore.addTask" v-model="taskStore.input" placeholder="What Would you Like To do?" />
    <ClickableButton @click="taskStore.addTask" v-if="taskStore.input.length > 0">
      <template #children>
        <Plus class="text-slate-950" />
      </template>
    </ClickableButton>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

type Props = {
  click: () => void | Promise<void>;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button :class="twMerge('', props.class)">
    <slot name="children" />
  </button>
</template>

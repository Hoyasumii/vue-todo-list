<script setup lang="ts">
import { onMounted } from 'vue';

type Props = {
  title: string
}

const props = defineProps<Props>()

onMounted(() => {
  document.title = props.title;
})
</script>

<template>
  <slot />
</template>

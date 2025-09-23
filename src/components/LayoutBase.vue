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
  <main class="text-slate-950 min-h-dvh py-6 xl:w-4/12 lg:w-6/12 xl:py-16 flex flex-col gap-4">
    <slot />
  </main>
</template>

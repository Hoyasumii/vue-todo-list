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
  <main class="text-stone-500 min-h-dvh px-4 py-6 xl:w-4/12 xl:py-16">
    <slot />
  </main>
</template>

<script setup lang="ts">
import { HomePage, NotFound } from '@/pages';
import { computed, ref, type Component } from 'vue';
import { Layout } from '@/components';

type Route = {
  component: Component;
  title: string;
}

const routes: Record<string, Route> = {
  "/": {
    component: HomePage,
    title: "My Tasks"
  }
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
});

const currentView = computed<Route>(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
});
</script>

<template>
  <Layout :title="currentView.title">
    <component :is="currentView.component" />
  </Layout>
</template>

<script setup lang="ts">
import { NotFound } from '@/pages';
import { Home } from '@/pages/home';
import { computed, defineComponent, onMounted, ref, type Component } from 'vue';
import { Layout } from '@/components';
import { projectName } from './constants';

type Route = {
  component: Component;
  title: string;
  footer: Component;
}

const routes: Record<string, Route> = {
  "/": {
    component: Home.Content,
    title: "My Tasks",
    footer: Home.Footer
  }
};

const notFound: Route = {
  component: NotFound,
  title: "Page Not Found",
  footer: defineComponent({})
};

const currentPath = ref<string>(window.location.pathname);

onMounted(() => {
  currentPath.value = window.location.pathname;
});

const currentView = computed<Route>(() => {
  return routes[currentPath.value || '/'] || notFound
});

const getTitle = () => `${currentView.value.title} | ${projectName}`;
</script>

<template>
  <Layout :title="getTitle()">
    <template #main>
      <component :is="currentView.component" />
    </template>
    <template #footer>
      <component :is="currentView.footer" />
    </template>
  </Layout>
</template>

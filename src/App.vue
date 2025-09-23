<script setup lang="ts">
import { HomePage, NotFound } from '@/pages';
import { computed, onMounted, ref, type Component } from 'vue';
import { Layout } from '@/components';
import { projectName } from './constants';

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

const notFound: Route = {
  component: NotFound,
  title: "Page Not Found"
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
    <component :is="currentView.component" />
  </Layout>
</template>

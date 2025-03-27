<script setup>
definePageMeta({
  layout: "profile",
});

const questionComponents = {
  'dashboard': () => import('~/components/routes/profile/dashboard/DashboardPage.vue'),
};

const route = useRoute();
const currentQuestionComponent = ref();

async function loadComponent() {
  const componentLoader = questionComponents[route.params.id];

  if (!componentLoader) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found'
    });
  }

  try {
    const component = await componentLoader();
    currentQuestionComponent.value = component.default || component;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Failed to load component',
      fatal: true
    });
  }
}

watch(
    () => route.params.id,
    async () => {
      await loadComponent();
    },
    { immediate: true }
);
</script>

<template>
  <div v-if="currentQuestionComponent">
    <component :is="currentQuestionComponent" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
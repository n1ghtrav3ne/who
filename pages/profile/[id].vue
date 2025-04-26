<script setup>
definePageMeta({
  layout: "profile",
});

const questionComponents = {
  'dashboard': () => import('~/components/routes/profile/dashboard/DashboardPage.vue'),
  'orders': () => import('~/components/routes/profile/orders/OrderPage.vue'),
  'size': () => import('~/components/routes/profile/size/SizePage.vue'),
  'cloth': () => import('~/components/routes/customize/ClothSize.vue'),
  'pants': () => import('~/components/routes/customize/PantsSize.vue'),
  'shoes': () => import('~/components/routes/customize/ShoesSize.vue'),
  'favorites': () => import('~/components/routes/profile/favorites/FavoritesPage.vue'),
  'address': () => import('~/components/routes/profile/address/AddressPage.vue'),
  'information': () => import('~/components/routes/profile/information/InformationPage.vue'),
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
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'

const route = useRouter()

const layout = computed(
  () => `${route.currentRoute.value.meta.layout || 'layout-default'}`
)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <NuxtLink
    :to="`/posts/${post.id}`"
    class="block p-6 bg-white bg-opacity-20 rounded-lg shadow-lg hover:bg-opacity-40 transition"
  >
    <h2 class="text-xl font-semibold mb-2 text-white">{{ post.title }}</h2>
    <p class="text-gray-100">{{ post.body.slice(0, 100) }}...</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { data: post, error } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);

if (error.value) {
  console.error("Failed to fetch post", error.value);
}
</script>

<template>
  <section v-if="post" class="p-8 max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">{{ post?.title }}</h1>
    <p class="text-lg">{{ post?.body }}</p>
  </section>
  <p v-else class="text-center mt-10">Loading post...</p>
</template>

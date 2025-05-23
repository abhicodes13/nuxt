<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Demo Posts</h1>

    <div v-if="pending">Loading posts...</div>
    <div v-else-if="error">Failed to load posts.</div>

    <ul v-else class="space-y-4">
      <li
        v-for="post in posts"
        :key="post.id"
        class="border border-gray-200 p-4 rounded shadow"
      >
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");

if (error.value) {
  console.error("Fetch error:", error.value);
}
</script>

<template>
  <section
    class="min-h-screen bg-gray-50 px-6 py-10 bg-gradient-to-br from-indigo-500 to-purple-600"
  >
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">
        📚 Fetching posts from REST API
      </h1>

      <div v-if="pending" class="text-gray-500">Loading posts...</div>
      <div v-else-if="error" class="text-red-500">
        Something went wrong fetching posts.
      </div>

      <div v-else class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-indigo-100 to-purple-300"
        >
          <h2 class="text-2xl font-semibold text-blue-600 mb-2">
            {{ post.title }}
          </h2>
          <p class="text-gray-700">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

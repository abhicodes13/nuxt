<template>
  <section
    class="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 text-white p-8"
  >
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold mb-6 drop-shadow-lg">Posts</h1>
      <p class="mb-8 text-lg drop-shadow-md">
        Browse posts fetched from JSONPlaceholder API — learn Vue & Nuxt with
        real data!
      </p>

      <div class="flex gap-4 mb-10">
        <NuxtLink
          to="/"
          class="bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-md py-2 px-6 font-semibold shadow-md shadow-indigo-900/50"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="bg-indigo-700 hover:bg-indigo-900 transition rounded-md py-2 px-6 font-semibold shadow-md shadow-indigo-900/60"
        >
          About
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts, error } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: { PostCard },
};
</script>

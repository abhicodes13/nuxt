<template>
  <section
    class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col justify-center items-center px-6 text-white text-center"
  >
    <h1 class="text-5xl font-extrabold mb-4 drop-shadow-lg">
      Welcome to My Nuxt App
    </h1>
    <p class="text-xl max-w-xl mb-8 drop-shadow-md">
      Explore the power of Vue & Nuxt with simple, clean UI and data fetching
      from JSONPlaceholder.
    </p>
    <div class="flex gap-6">
      <NuxtLink
        to="/about"
        class="bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-md py-3 px-8 font-semibold shadow-md shadow-indigo-900/50"
      >
        About Us
      </NuxtLink>
      <NuxtLink
        to="/posts"
        class="bg-indigo-700 hover:bg-indigo-900 transition rounded-md py-3 px-8 font-semibold shadow-md shadow-indigo-900/60"
      >
        View Posts
      </NuxtLink>
    </div>
  </section>
</template>

<style>
/* Optional: you can add a custom font or some global styles here */
</style>

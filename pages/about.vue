<template>
  <section
    class="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center px-8 text-center"
  >
    <div class="max-w-3xl">
      <h1 class="text-5xl font-extrabold mb-6 drop-shadow-lg">
        About This App
      </h1>
      <p class="text-lg mb-10 drop-shadow-md">
        This simple Nuxt app demonstrates Vue 3 basics, routing, and fetching
        data from an external API. Built with TailwindCSS for fast and beautiful
        styling.
      </p>

      <div class="flex gap-6 justify-center">
        <NuxtLink
          to="/"
          class="bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-md py-3 px-8 font-semibold shadow-md shadow-indigo-900/50"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/posts"
          class="bg-purple-700 hover:bg-purple-900 transition rounded-md py-3 px-8 font-semibold shadow-md shadow-indigo-900/60"
        >
          View Posts
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

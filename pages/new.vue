<script setup>
const count = ref(0);
</script>

<template>
  <div class="h-[100vh] w-[100vw] bg-black flex items-center justify-center">
    <div class="text-white w-50 h-50 bg-[#4489ad] p-4">
      Testing Tailwind in Vue {{ count }}
    </div>
    <button class="text-white p-3 border-white border-solid" @click="count++">
      Increment
    </button>
  </div>
</template>

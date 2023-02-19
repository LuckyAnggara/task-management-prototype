<template>
  <img
    class="w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
    :src="source"
    alt=""
  />
</template>

<script setup>
const props = defineProps({
  source: String,
})
</script>

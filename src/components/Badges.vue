<template>
  <div class="px-2 h-6 rounded-md text-xs font-semibold flex items-center" :class="bgColorClassAtas">
    <span class="w-2 h-2 rounded-lg mr-2" :class="bgColorClassBawah"></span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: String,
})

const bgColorClassBawah = `bg-${props.color}-400`
const bgColorClassAtas = `bg-${props.color}-100 text-${props.color}-700`
</script>

<template>
  <label v-if="!isEdit" @dblclick="edit" class="ml-4 font-medium cursor-text">
    {{ data.title }}</label
  >
  <input
    v-else
    @focusout="isEdit = false"
    ref="input"
    class="ml-2 w-5/6 bg-gray-50 border border-gray-300 text-sm rounded-lg p-2"
    v-model="data.title"
  />
</template>

<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  data: Object,
})

const input = ref(null)
const isEdit = ref(false)

async function edit() {
  isEdit.value = !isEdit.value
  await nextTick()
  input.value.focus()
}
</script>

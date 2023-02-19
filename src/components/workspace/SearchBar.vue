<template>
  <div class="relative lg:w-96 w-full h-full md:mb-0 mb-4">
    <div
      class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
    >
      <div class="grid place-items-center h-full w-12 text-gray-500">
        <MagnifyingGlassIcon class="w-7 h-7" />
      </div>
    </div>
    <input
      autocomplete="off"
      v-model="projectStore.searchValue"
      type="text"
      id="simple-search"
      class="bg-gray-100 border-none shadow-sm text-gray-600 outline-none text-sm rounded-lg place-items-start block w-full pl-12 p-2.5 py-3 focus:outline-custom-accent-green"
      placeholder="Find Project"
      required
    />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useProjectStore } from '../../stores/project'
const projectStore = useProjectStore()
</script>

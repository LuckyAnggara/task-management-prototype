<template>
  <div class="mt-8 mb-12">
    <div class="flex flex-col items-center">
      <!-- Help text -->
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">{{
          fromItem
        }}</span>
        to
        <span class="font-semibold text-gray-900 dark:text-white">{{
          toItem
        }}</span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">{{
          projectStore.data.length
        }}</span>
        Entries
      </span>
      <div class="inline-flex mt-2 xs:mt-0">
        <!-- Buttons -->
        <button
          :disabled="projectStore.paggination.currentPage == 1"
          @click="projectStore.prevPage"
          :class="[
            projectStore.paggination.currentPage == 1
              ? 'text-white bg-green-300'
              : 'text-white bg-custom-accent-green rounded-l hover:bg-gray-900',
          ]"
          class="group inline-flex items-center px-4 py-2 text-sm font-medium border-0 border-r rounded-l"
        >
          <svg
            aria-hidden="true"
            :class="[
              projectStore.paggination.currentPage == 1
                ? ''
                : 'group-hover:-translate-x-2 translate-x-0 transform transition duration-500 ease-in-out',
            ]"
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Prev
        </button>
        <ul class="inline-flex items-center -space-x-px">
          <li v-for="page in pages" :key="page">
            <a
              href="#"
              class="px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-200 hover:text-gray-700 rounded-sm text-sm"
              >{{ page }}</a
            >
          </li>
        </ul>
        <button
          :disabled="
            projectStore.paggination.currentPage == projectStore.totalPages
          "
          @click="projectStore.nextPage"
          :class="[
            projectStore.paggination.currentPage == projectStore.totalPages
              ? 'text-white bg-green-300'
              : 'text-white bg-custom-accent-green rounded-l hover:bg-gray-900',
          ]"
          class="group inline-flex items-center px-4 py-2 text-sm font-medium border-0 border-l rounded-r"
        >
          Next
          <svg
            :class="[
              projectStore.paggination.currentPage == projectStore.totalPages
                ? ''
                : 'group-hover:translate-x-2 translate-x-0 transform transition duration-500 ease-in-out',
            ]"
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useProjectStore } from '../../stores/project'

const projectStore = useProjectStore()

const fromItem = computed(() => {
  return (
    (projectStore.paggination.currentPage - 1) * projectStore.showDataLength + 1
  )
})

const toItem = computed(() => {
  return Math.min(
    projectStore.paggination.currentPage * projectStore.showDataLength,
    projectStore.data.length
  )
})

const pageDiff = computed(() => {
  return Math.floor(projectStore.totalPages / 2)
})

const pages = []
let start = computed(() => {
  return Math.max(1, projectStore.paggination.currentPage - pageDiff)
})

let end = computed(() => {
  return Math.min(projectStore.totalPages, start + projectStore.totalPages - 1)
})

if (end - start + 1 < projectStore.totalPages) {
  start = Math.max(1, end - projectStore.totalPages + 1)
}

for (let i = start; i <= end; i++) {
  pages.push(i)
}
</script>

<style scoped>
@keyframes loop {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2rem);
  }
  100% {
    transform: translateX(0);
  }
}

.loop-animation {
  animation: loop 2s ease-in-out infinite;
}
</style>

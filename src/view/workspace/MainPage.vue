<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-end lg:justify-between">
      <!-- FILTER -->
      <div class="hidden lg:flex">
        <ul class="flex space-x-4">
          <li v-for="filter in filterList" :key="filter.id" class="hover:scale-105 transition ease-in-out duration-300">
            <span
              :class="[filter.id == filterActive ? 'bg-custom-accent-green text-white' : 'bg-green-100  text-gray-500  ']"
              class="rounded-lg py-2 px-3 cursor-pointer"
              @click="filterActive = filter.id"
            >
              {{ filter.name }}
            </span>
          </li>
        </ul>
      </div>
      <!-- SORT -->

      <div class="flex space-x-4 items-center">
        <div class="mr-8 flex space-x-2 items-center">
          <BarsArrowUpIcon
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-custom-accent-green"
            v-show="isDesc"
            @click="isDesc = !isDesc"
          />

          <BarsArrowDownIcon
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-custom-accent-green"
            v-show="!isDesc"
            @click="isDesc = !isDesc"
          />

          <span v-show="isDesc" class="text-gray-500 text-sm">Most Recent</span>
          <span v-show="!isDesc" class="text-gray-500 text-sm">Most Lately</span>
        </div>
        <Squares2X2Icon
          :class="[isGrid ? 'text-custom-accent-green ' : 'text-gray-500']"
          class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
          @click="isGrid = !isGrid"
        />
        <Bars3Icon
          :class="[!isGrid ? 'text-custom-accent-green ' : 'text-gray-500']"
          class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
          @click="isGrid = !isGrid"
        />
      </div>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4 max-w-full">
      <div v-for="project in projectStore.data" :key="project.id">
        <CardProject :data="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Squares2X2Icon, Bars3Icon, BarsArrowUpIcon, BarsArrowDownIcon } from '@heroicons/vue/24/outline'
import { useProjectStore } from '../../stores/project'
import CardProject from '../../components/CardProject.vue'

const isDesc = ref(true)
const isGrid = ref(true)

const projectStore = useProjectStore()

const filterActive = ref(0)
const filterList = [
  {
    id: 0,
    name: 'All Projects',
  },
  {
    id: 1,
    name: 'In Progress',
  },
  {
    id: 2,
    name: 'Completed',
  },
  {
    id: 4,
    name: 'Drafts',
  },
]
</script>

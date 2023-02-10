<template>
  <div class="flex flex-col">
    <div class="flex sm:flex-row items-start sm:items-center justify-end lg:justify-between flex-col">
      <!-- SEARCH -->

      <div class="relative sm:w-96 w-full h-full md:mb-0 mb-4">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <div class="grid place-items-center h-full w-12 text-gray-500">
            <MagnifyingGlassIcon class="w-7 h-7" />
          </div>
        </div>
        <input
          autocomplete="off"
          v-model="searchValue"
          type="text"
          id="simple-search"
          class="bg-gray-50 border-none shadow-sm text-gray-600 outline-none text-sm rounded-lg place-items-start block w-full pl-12 p-2.5 py-3 focus:outline-custom-accent-green"
          placeholder="Find Project"
          required
        />
      </div>

      <!-- SORT -->
      <div class="flex items-center">
        <div class="mr-4 flex space-x-2 items-center">
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
        <div class="flex space-x-2">
          <Squares2X2Icon
            :class="[isGrid ? 'text-custom-accent-green ' : 'text-gray-500']"
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
          />
          <Bars3Icon
            :class="[!isGrid ? 'text-custom-accent-green ' : 'text-gray-500']"
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
          />
        </div>
      </div>
    </div>

    <!-- FILTER -->
    <div class="hidden lg:flex mt-6">
      <ul class="flex space-x-4">
        <li v-for="filter in filterList" :key="filter.id" class="hover:scale-105 transition ease-in-out duration-300">
          <span
            :class="[filter.id == filterActive ? 'bg-custom-accent-green text-white font-medium' : 'bg-green-100  text-gray-500  ']"
            class="rounded-lg py-2 px-3 cursor-pointer shadow"
            @click="filterActive = filter.id"
          >
            {{ filter.name }}
          </span>
        </li>
      </ul>
    </div>
    <template v-if="projectStore.isLoading" class="flex justify-center">
      <atom-spinner :animation-duration="1000" :size="60" :color="'#ff1d5e'" />
    </template>
    <template v-else>
      <TransitionGroup tag="div" name="fade" class="container mt-12 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-4 max-w-full">
        <div v-for="project in sortedArray" :key="project.id">
          <CardProject :data="project" />
        </div>
      </TransitionGroup>
    </template>
  </div>
</template>

<script setup>
import { AtomSpinner } from 'epic-spinners'
import { computed, ref, onMounted } from 'vue'
import { Squares2X2Icon, Bars3Icon, BarsArrowUpIcon, BarsArrowDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useProjectStore } from '../../stores/project'
import CardProject from '../../components/CardProject.vue'

const isDesc = ref(true)
const isGrid = ref(true)
const searchValue = ref('')
const filterActive = ref(0)

const projectStore = useProjectStore()

const sortedArray = computed(() => {
  let tempData = projectStore.dataProject

  // Process search input
  if (searchValue.value != '' && searchValue.value) {
    tempData = tempData.filter((item) => {
      return item.title.toUpperCase().includes(searchValue.value.toUpperCase())
    })
  }

  // Filter out by cooking time
  if (filterActive.value > 0) {
    tempData = tempData.filter((item) => {
      return item.status == filterList[filterActive.value].name
    })
  } else {
    return tempData
  }

  // Show sorted array in descending or ascending order
  if (isDesc.value) {
    tempData.reverse()
  }

  return tempData
})

onMounted(() => {
  projectStore.getData()
  console.info(projectStore.dataProject)
})

const filterList = [
  {
    id: 0,
    name: 'All Projects',
  },
  {
    id: 1,
    name: 'Ongoing',
  },
  {
    id: 2,
    name: 'Completed',
  },
  {
    id: 3,
    name: 'Draft',
  },
]
</script>

<style>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>

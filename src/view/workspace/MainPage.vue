<template>
  <div class="flex flex-col">
    <div
      class="flex sm:flex-row items-start sm:items-center flex-col justify-between"
    >
      <!-- SEARCH -->
      <SearchBar />
      <!-- SORT -->
      <div class="flex items-center w-full sm:w-fit">
        <FilterDropdown class="grow sm:hidden" />
        <Transition name="slide-up" :duration="'1000'">
          <div
            class="mr-4 flex space-x-2 items-center flex-none"
            v-show="projectStore.viewActive == 'GRID'"
          >
            <BarsArrowUpIcon
              class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-custom-accent-green"
              v-show="projectStore.isDesc"
              @click="projectStore.isDesc = !projectStore.isDesc"
            />

            <BarsArrowDownIcon
              class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-custom-accent-green"
              v-show="!projectStore.isDesc"
              @click="projectStore.isDesc = !projectStore.isDesc"
            />
            <span
              v-show="projectStore.isDesc"
              class="text-gray-500 text-sm sm:flex hidden"
              >Most Recent</span
            >
            <span
              v-show="!projectStore.isDesc"
              class="text-gray-500 text-sm sm:flex hidden"
              >Most Lately</span
            >
          </div>
        </Transition>
        <div class="flex space-x-2 flex-none">
          <Squares2X2Icon
            :class="[
              projectStore.viewActive == 'GRID'
                ? 'text-custom-accent-green '
                : 'text-gray-500',
            ]"
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
            @click="projectStore.viewActive = 'GRID'"
          />

          <!-- asdasd -->
          <Bars3Icon
            :class="[
              projectStore.viewActive == 'LIST'
                ? 'text-custom-accent-green '
                : 'text-gray-500',
            ]"
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
            @click="projectStore.viewActive = 'LIST'"
          />

          <TableCellsIcon
            :class="[
              projectStore.viewActive == 'TABLE'
                ? 'text-custom-accent-green '
                : 'text-gray-500',
            ]"
            class="w-8 h-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:text-custom-accent-green"
            @click="projectStore.viewActive = 'TABLE'"
          />
        </div>
      </div>
    </div>

    <!-- FILTER -->
    <div class="sm:flex hidden mt-6 transition-transform duration-300">
      <ul class="flex space-x-4 items-center">
        <li
          v-for="filter in projectStore.filterList"
          :key="filter.id"
          class="hover:scale-105 transition ease-in-out duration-300"
        >
          <span
            :class="[
              filter.id == projectStore.filterActive.id
                ? 'bg-custom-accent-green text-white font-medium'
                : 'bg-green-100  text-gray-500  ',
            ]"
            class="rounded-lg py-2 px-3 cursor-pointer shadow"
            @click="projectStore.filterActive = filter"
          >
            {{ filter.name }}
          </span>
        </li>
        <li class="hover:scale-105 transition ease-in-out duration-300">
          <span
            class="rounded-lg py-2 px-3 cursor-pointer shadow bg-green-100 text-gray-500 flex items-center"
          >
            <PlusIcon class="w-4 h-4 mr-2" /> <span>New</span>
          </span>
        </li>
      </ul>
    </div>
    <Transition
      tag="template"
      name="slide-up"
      :duration="{ enter: 500, leave: 800 }"
    >
      <div
        v-if="projectStore.isLoading"
        class="flex flex-col space-y-16 justify-center items-center flex-wrap w-full h-96 z-20 absolute w-1/2 h-1/2 m-auto left-0 right-0 top-0 bottom-0"
      >
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="100"
          color="#2EB26D"
        />
        <span class="font-medium text-xl text-gray-500"> Load Data ... </span>
      </div>
      <div v-else>
        <Transition name="slide-up" :duration="{ enter: 500, leave: 100 }">
          <div v-if="projectStore.viewActive == 'GRID'">
            <GridViewWorkspace />
          </div>
          <div v-else-if="projectStore.viewActive == 'TABLE'">
            <TableViewWorkspace />
          </div>
        </Transition>
      </div>
    </Transition>

    <Transition tag="template" name="slide-up"> </Transition>
    <!-- 
    <SimpleButton
      v-if="!projectStore.isLoading == true"
      class="duration-300 transition hover:-translate-y-2 place-self-center mb-12"
    >
      Load More
    </SimpleButton> -->
  </div>
</template>

<script setup>
import { BreedingRhombusSpinner } from 'epic-spinners'
import { computed, ref, onMounted } from 'vue'
import {
  PlusIcon,
  Squares2X2Icon,
  Bars3Icon,
  BarsArrowUpIcon,
  BarsArrowDownIcon,
  TableCellsIcon,
} from '@heroicons/vue/24/outline'
import { useProjectStore } from '../../stores/project'

import SimpleButton from '../../components/button/SimpleButton.vue'
import FilterDropdown from '../../components/workspace/FilterDropdown.vue'
import GridViewWorkspace from '../../components/workspace/GridView.vue'
import TableViewWorkspace from '../../components/workspace/TableView.vue'
import SearchBar from '../../components/workspace/SearchBar.vue'
import { toast } from 'vue3-toastify'

const projectStore = useProjectStore()

projectStore.$subscribe((mutation, state) => {
  if (mutation.events.key == 'viewActive') {
    toast(`${projectStore.viewActive.toUpperCase()} VIEW MODE`, {
      type: 'info',
      transition: toast.TRANSITIONS.SLIDE,
      theme: 'dark',
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 500,
    }) // ToastOptions
  }
})
onMounted(() => {
  projectStore.getData()
})
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

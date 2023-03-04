<template>
  <div
    class="bg-gray-100 rounded-lg sm:w-full flex flex-row sm:space-x-4 space-x-1 mt-6 sm:py-6 sm:px-4 py-2 px-2 h-fit w-fit mb-9"
  >
    <div
      class="sm:w-96 w-full h-full flex flex-col px-4"
      v-for="filter in projectStore.listViewData"
      :key="filter.title"
    >
      <!-- Title -->
      <div
        class="w-full h-16 bg-white rounded-sm shadow-sm text-center items-center flex justify-between px-6 mb-6"
      >
        <div class="flex flex-row">
          <span class="text-gray-500 font-bold text-lg">{{
            filter.title
          }}</span>
          <span
            class="ml-2 bg-gray-100 text-custom-accent-green text-sm font-medium flex items-center justify-center w-8 h-8 rounded-full"
            >{{ filter.projects.length }}</span
          >
        </div>
        <EllipsisVerticalIcon
          class="h-7 w-7 font-medium text-gray-500 cursor-pointer"
        />
      </div>
      <!-- Content -->
      <!-- <template v-if="projectStore.filterItem(filter.name).length > 0"> -->
      <draggable
        :id="filter.title"
        class="list-group flex flex-col space-y-4"
        :list="filter.projects"
        :animation="500"
        tag="div"
        ghost-class="ghost-card"
        group="tasks"
        :itemKey="`aa`"
        @end="moveData"
      >
        <template #item="{ element }">
          <ListCardProject
            @drag="projectStore.draggableComponentData.id = element.id"
            :data="element"
            :status="filter.title"
          />
        </template>
      </draggable>
      <!-- </template> -->

      <!-- <template v-else>
        <div
          class="w-full h-60 bg-gray-100 rounded-md px-8 py-6 border-4 border-gray-200 border-dotted flex items-center justify-center"
        >
          <span class="text-gray-500 font-medium text-md text-center"
            >No Content</span
          >
        </div>
      </template> -->

      <!-- <div
          v-for="project in projectStore.filterItem(filter.name)"
          :key="project.id"
          class="w-full max-h-full h-54 bg-white rounded-md shadow-sm justify-between px-8 py-6 hover:translate-x-4 transform duration-500 ease-in-out cursor-pointer hover:bg-gray-50"
        >
          <a v-if="project.title == 'esse officia'" href="#">
            <img
              class="rounded-t-lg"
              src="https://plus.unsplash.com/premium_photo-1668241683760-154febd417ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </a>
          <div class="flex justify-between items-center mb-5">
            <span class="text-gray-700 font-semibold text-2xl">{{ project.title }}</span>
            <EllipsisHorizontalIcon class="h-7 w-7 font-bold text-xl text-gray-700" />
          </div>
          <span class="text-gray-500 font-normal text-md">
            {{ project.description.substring(0, 120) }}
            {{ project.description.length > 160 ? '...' : '' }}
          </span>
          <div class="flex flex-row justify-between items-center mt-4">
            <div class="flex flex-row justify-center items-center space-x-2">
              <div class="flex flex-row items-center space-x-1 justify-center">
                <PaperClipIcon class="w-5 h-5 text-gray-500" /> <span class="text-gray-500 text-sm">3</span>
              </div>
              <div class="flex flex-row items-center space-x-1 justify-center">
                <ChatBubbleLeftEllipsisIcon class="w-5 h-5 text-gray-500" /> <span class="text-gray-500 text-sm">3</span>
              </div>
            </div>
            <ul class="flex -space-x-2">
              <li v-for="member in project.member.length > 3 ? project.member.slice(0, 3) : project.member" :key="member.no">
                <Avatar :source="'https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg'" />
              </li>
              <li v-if="project.member.length > 3">
                <div
                  class="bg-gray-500 text-white text-xs flex items-center justify-center w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
                >
                  +{{ project.member.length }} {{ -5 }}
                </div>
              </li>
            </ul>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useProjectStore } from '../../stores/project'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import SearchBar from './SearchBar.vue'
import draggable from 'vuedraggable'

import ListCardProject from './ListCardProject.vue'
const projectStore = useProjectStore()

function moveData(evt) {
  projectStore.draggableComponentData.fromId = evt.from.id
  projectStore.draggableComponentData.toId = evt.to.id
  projectStore.changeStatusDraggableData()
}

const data = projectStore.data

const filterList = [
  {
    id: 1,
    name: 'Idea',
  },
  {
    id: 2,
    name: 'Ongoing',
  },
  {
    id: 3,
    name: 'In Review',
  },
  {
    id: 4,
    name: 'Completed',
  },
]
</script>

<style scoped>
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.not-draggable {
  cursor: no-drop;
}

.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>

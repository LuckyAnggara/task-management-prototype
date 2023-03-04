<template>
  <div class="w-full py-6 flex flex-col h-96">
    <div class="flex w-full justify-end items-center">
      <!-- <SearchBar /> -->
      <div class="w-96 flex items-center justify-end">
        <span class="mr-4 w-1/5 text-gray-500"> Show Data </span>
        <ShowDataDropdown class="w-2/5" />
      </div>
    </div>

    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="overflow-hidden flex flex-col justify-center items-center"
          >
            <table class="min-w-full text-gray-500">
              <thead class="border-b">
                <tr class="font-medium text-left text-lg">
                  <th scope="col" class="py-4">Project Title</th>
                  <th scope="col" class="sm:flex hidden py-4 px-2">
                    Created at
                  </th>
                  <th scope="col" class="py-4 px-2">Progress</th>
                  <th scope="col" class="py-4 px-2">Task</th>
                  <th scope="col" class="py-4 px-2">Owner</th>
                  <th scope="col" class="py-4 px-2">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <TransitionGroup name="list">
                  <tr
                    v-for="project in projectStore.sortedArray"
                    :key="project.id"
                    :class="[
                      project.status == 'Completed'
                        ? 'strikeout bg-green-100'
                        : '',
                    ]"
                    class="border-b transition duration-300 ease-linear hover:bg-gray-100 cursor-pointer hover:-translate-y-1 hover:translate-x-1"
                  >
                    <td class="font-medium">
                      <input
                        type="checkbox"
                        :value="project.status"
                        v-model="project.status"
                        :true-value="'Completed'"
                        :false-value="'Ongoing'"
                        class="w-4 h-4 rounded focus:ring-custom-accent-green accent-pink-500 cursor-pointer"
                      />
                      <TitleTableEdit :data="project" />
                      <!-- <label class="ml-4 font-medium cursor-text">
                        {{ project.title }}</label
                      > -->
                      <!-- <input class="ml-2 w-5/6" v-model="project.title" /> -->
                    </td>
                    <td class="py-4">
                      {{ moment(project.start_date).format('DD MMMM YYYY') }}
                    </td>
                    <td class="py-4">
                      {{ project.status }}
                    </td>
                    <td class="py-4">
                      <!-- Progress Bar -->
                      <div class="w-full bg-green-200 rounded-md h-2.5">
                        <div
                          class="bg-green-600 h-2.5 rounded-md"
                          style="width: 67.7%"
                        ></div>
                      </div>
                    </td>
                    <td class="flex items-center py-4">
                      <Avatar
                        :source="'https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg'"
                      />
                      <span class="ml-4 font-medium sm:flex hidden">Lucky</span>
                    </td>
                    <td class="py-4">
                      {{ moment(project.deadline_date).format('DD MMMM YYYY') }}
                    </td>
                  </tr>
                </TransitionGroup>
              </tbody>
            </table>
            <Paggination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '../../stores/project'
import Avatar from '../Avatar.vue'
import moment from 'moment'
import ShowDataDropdown from './ShowDataDropdown.vue'
import TitleTableEdit from './TitleTableEdit.vue'
import SearchBar from './SearchBar.vue'
import Paggination from './Paggination.vue'

const projectStore = useProjectStore()
</script>

<style>
table {
  border-collapse: collapse;
}

td {
  position: relative;
  padding: 5px 10px;
}

tr.strikeout td:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  border-bottom: 1px solid #111;
  width: 100%;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

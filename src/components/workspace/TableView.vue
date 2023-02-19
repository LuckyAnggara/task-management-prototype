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
                  <th scope="col" class="py-4 px-2">Owner</th>
                  <th scope="col" class="py-4 px-2">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <TransitionGroup name="list">
                  <tr
                    v-for="project in projectStore.sortedArray"
                    :key="project._id"
                    :class="[
                      project.status == 'Completed'
                        ? 'strikeout bg-green-100'
                        : '',
                    ]"
                    class="border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer hover:-translate-y-1 hover:translate-x-2"
                  >
                    <td class="font-medium">
                      <input
                        :id="'checkbox-' + project._id"
                        type="checkbox"
                        :value="project.status"
                        v-model="project.status"
                        :true-value="'Completed'"
                        :false-value="'Ongoing'"
                        class="w-4 h-4 rounded focus:ring-custom-accent-green accent-pink-500"
                      />
                      <label
                        :for="'checkbox-' + project._id"
                        class="ml-4 font-medium"
                      >
                        {{ project.title }}</label
                      >
                    </td>
                    <td class="py-4">
                      {{ moment(project.start_date).format('DD MMMM YYYY') }}
                    </td>
                    <td class="py-4">
                      {{ project.status }}
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
            <div class="mt-8 mb-12">
              <!-- Previous Button -->
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 font-medium text-white bg-green-500 border rounded-lg transition duration-300 ease-in-out hover:scale-110"
              >
                Previous
              </a>

              <!-- Next Button -->
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 ml-3 font-medium text-white bg-green-500 border rounded-lg transition duration-300 ease-in-out hover:scale-110"
              >
                Next
              </a>
            </div>
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
import SearchBar from './SearchBar.vue'

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

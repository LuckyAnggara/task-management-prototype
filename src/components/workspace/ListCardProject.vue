<template>
  <div
    class="max-h-full h-54 sm:w-full bg-white rounded-sm shadow-md justify-between px-6 py-6 ease-in-out hover:bg-gray-50 transition-all duration-300 cursor-move"
  >
    <!-- Image -->
    <img :class="[data.image == null ? 'invisible' : 'rounded-lg mb-4']" class="" :src="data.image" alt="" />
    <!-- Title and Menu -->
    <div class="flex justify-between items-center mb-2">
      <span class="text-gray-700 font-semibold text-2xl">{{ data.title }}</span>
      <Menu as="div" class="relative inline-block text-left justify-end">
        <div>
          <MenuButton class="hover:-translate-y-1 duration-300 ease-in-out transition flex items-center">
            <EllipsisVerticalIcon class="h-7 w-7 font-bold text-xl text-gray-700" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            :class="[status == 'Completed' ? 'right-0' : 'left-0']"
            class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button :class="[active ? 'bg-green-400 text-white' : 'text-gray-500', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                  <ArrowTopRightOnSquareIcon :active="active" class="mr-3 h-5 w-5" aria-hidden="true" />
                  Detail
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button :class="[active ? 'bg-green-400 text-white' : 'text-gray-500', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                  <UserGroupIcon :active="active" class="mr-3 h-5 w-5" aria-hidden="true" />
                  View Teams
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button :class="[active ? 'bg-green-400 text-white' : 'text-gray-500', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                  <StarIcon :active="active" class="mr-3 h-5 w-5" aria-hidden="true" />
                  Favorites
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button :class="[active ? 'bg-green-400 text-white' : 'text-gray-500', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                  <TrashIcon :active="active" class="mr-3 h-5 w-5" aria-hidden="true" />
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <!-- Description -->
    <div class="pr-2 text-justify">
      <span class="text-gray-500 font-light text-sm">
        {{ data.description.substring(0, 120) }}
        {{ data.description.length > 160 ? '...' : '' }}
      </span>
    </div>

    <!-- Priority Badge -->
    <!-- <div class="grid grid-cols-3 gap-2 mb-2 mt-3">
      <Badges :color="`red`"> Priority </Badges>
      <Badges :color="`green`"> Audit </Badges>
      <Badges :color="`blue`"> Audit </Badges>
      <Badges :color="`orange`"> Audit </Badges>
      <Badges :color="`green`"> Audit </Badges>
    </div> -->
    <!-- Progress -->
    <div class="mt-2 mb-4">
      <span class="text-gray-500 text-sm font-medium">
        Task Done : <span class="text-gray-700 font-medium">20</span> / <span class="font-medium text-gray-400">30</span>
      </span>
      <!-- Progress Bar -->
      <div class="w-full bg-green-200 rounded-md h-2.5">
        <div class="bg-green-600 h-2.5 rounded-md" style="width: 67.7%"></div>
      </div>
    </div>

    <!-- Bubble Chat and Attachment -->
    <div class="flex flex-row justify-between items-center mt-2">
      <div class="flex flex-row justify-center items-center space-x-2">
        <div
          class="cursor-pointer flex flex-row items-center space-x-1 justify-center duration-300 transition ease-in-out hover:-translate-y-2 hover:text-custom-accent-green text-gray-500"
        >
          <PaperClipIcon class="w-5 h-5" />
          <span class="text-sm">3</span>
        </div>
        <div
          class="cursor-pointer flex flex-row items-center space-x-1 justify-center duration-300 transition ease-in-out hover:-translate-y-2 hover:text-custom-accent-green text-gray-500"
        >
          <ChatBubbleLeftEllipsisIcon class="w-5 h-5" />
          <span class="text-sm">3</span>
        </div>
      </div>
      <ul class="flex -space-x-2">
        <li v-for="member in data.member.length > 3 ? data.member.slice(0, 3) : data.member" :key="member.no">
          <Avatar :source="'https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg'" />
        </li>
        <li v-if="data.member.length > 3">
          <div
            class="bg-gray-500 text-white text-xs flex items-center justify-center w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
          >
            +{{ data.member.length - 2 }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import {
  TrashIcon,
  ArrowTopRightOnSquareIcon,
  EllipsisVerticalIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperClipIcon,
  UserGroupIcon,
  StarIcon,
} from '@heroicons/vue/24/outline'
import Avatar from '../Avatar.vue'
import Badges from '../Badges.vue'

const props = defineProps({
  data: Object,
  status: String,
})
</script>

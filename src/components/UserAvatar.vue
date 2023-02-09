<template>
  <div class="bg-gray-200 py-2 px-2 rounded-lg sm:w-max w-fit flex items-center">
    <Menu as="div" class="">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md text-sm font-medium text-whitefocus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <!-- PICTURE -->
          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 sm:ml-2">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <!-- NAME dan NIP -->
          <div class="flex-col items-start relative hidden sm:flex text-gray-500">
            <span class="text-base font-medium ml-4">Lucky Anggara</span>
            <span class="text-sm tracking-wide font-medium ml-4">199207152019011001</span>
          </div>
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
          class="absolute right-3 z-50 mt-5 w-56 origin-top-right divide-y divide-black rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-500"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-custom-accent-green text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                <UserIcon :active="active" class="mr-4 h-6 w-6 text-gray-500" aria-hidden="true" />
                Profile
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-custom-accent-green text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                <Cog6ToothIcon :active="active" class="mr-4 h-6 w-6 text-gray-500" aria-hidden="true" />
                Setting
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-custom-accent-green text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                <ArrowLeftOnRectangleIcon :active="active" class="mr-4 h-6 w-6 text-gray-500" aria-hidden="true" />
                Logout
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Cog6ToothIcon, UserIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex mb-5 -space-x-4 shadow-md">
    <a v-for="member in dataMember.slice(0, 5)" :key="member.id">
      <img
        class="w-10 h-10 border-2 border-gray-800 rounded-full"
        src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
        alt=""
      />
    </a>

    <template v-if="dataMember.length > 5">
      <a
        class="flex w-10 h-10 items-center justify-center text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
      >
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="group px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none"
          >
            +{{ dataMember.length - 5 }}
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-1/2 z-50 mt-3 w-96 transform px-4 sm:px-0 lg:max-w-3xl"
            >
              <div class="shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  class="bg-black text-gray-300 font-medium text-base px-10 py-5 rounded-lg flex flex-col space-y-2 overflow-auto max-h-96"
                >
                  <p class="mb-2">{{ dataMember.length }} member</p>
                  <a v-for="member in dataMember" :key="member.nama" class="">
                    <div
                      class="relative mb-2 grid grid-cols-1 divide-y divide-blue-200"
                    >
                      <div class="flex items-center">
                        <img
                          class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-600"
                          src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
                        />
                        <div class="flex flex-col flex-auto truncate">
                          <p class="ml-3">
                            {{ member.nama }}
                          </p>
                          <p class="ml-3">NIP {{ member.nip }}</p>
                        </div>
                        <div class="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </a>
      <button
        type="button"
        class="z-20 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-green-700 border-2 border-white rounded-full hover:bg-green-600 dark:border-gray-800"
        @click="$emit('openDialog')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </template>

    <template v-else>
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-green-700 border-2 border-white rounded-full hover:bg-green-600 dark:border-gray-800"
        @click="$emit('openDialog')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </template>
  </div>
</template>

<script>
// import { ref, nextTick } from 'vue'
// import { useTaskStore } from '../stores/task'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

export default {
  props: {
    dataMember: {
      type: Array,
      required: true,
    },
  },
  setup() {},
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
}
</script>

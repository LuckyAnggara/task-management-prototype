<template>
  <Popover v-slot="{ open, close }" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      @mouseover="(e) => hoverPopover(e, open)"
      @mouseleave="closePopover(close)"
      class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:scale-110 transition ease-in-out hover:-translate-y-1 duration-200 motion-safe:animate-wiggle hover:animate-none"
    >
      <BellAlertIcon class="w-8 h-8 text-gray-600" />
      <div class="flex">
        <span
          class="animate-ping relative inline-flex h-4 w-4 bg-red-500 border-2 border-white rounded-full -top-2 right-3"
        ></span>
      </div>
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
        class="absolute right-1 z-50 mt-3 w-96 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <!-- Dropdown menu -->
        <div
          class="z-20 w-full max-w-sm bg-gray-200 divide-y divide-black rounded-lg shadow"
          aria-labelledby="dropdownNotificationButton"
          @mouseover="(e) => hoverPopover(e, open)"
          @mouseleave="closePopover(close)"
        >
          <div
            class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-200"
          >
            Notifications
          </div>
          <!-- Content -->
          <div class="divide-y divide-gray-100">
            <a href="#" class="flex px-4 py-3 hover:bg-gray-100">
              <div class="flex-shrink-0">
                <img
                  class="rounded-full w-11 h-11"
                  src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                  alt="Jese image"
                />
                <div
                  class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                    ></path>
                    <path
                      d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="text-gray-500 text-sm mb-1.5">
                  New message from
                  <span class="font-semibold text-gray-900">Jese Leos</span>:
                  "Hey, what's up? All set for the presentation?"
                </div>
                <div class="text-xs text-blue-600">a few moments ago</div>
              </div>
            </a>
            <a href="#" class="flex px-4 py-3 hover:bg-gray-100">
              <div class="flex-shrink-0">
                <img
                  class="rounded-full w-11 h-11"
                  src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                  alt="Joseph image"
                />
                <div
                  class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="text-gray-500 text-sm mb-1.5">
                  <span class="font-semibold text-gray-900">Joseph Mcfall</span>
                  and
                  <span class="font-medium text-gray-900">5 others</span>
                  started following you.
                </div>
                <div class="text-xs text-blue-600">10 minutes ago</div>
              </div>
            </a>
          </div>
          <a
            href="#"
            class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-200"
          >
            <div
              class="inline-flex items-center hover:scale-110 transition ease-in-out duration-200"
            >
              <svg
                class="w-4 h-4 mr-2 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              View all
            </div>
          </a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
export default {
  props: {
    dataMember: {
      type: Array,
      required: true,
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { BellAlertIcon } from '@heroicons/vue/24/outline'
const popoverHover = ref(false)
const popoverTimeout = ref(null)

const hoverPopover = (e, open) => {
  popoverHover.value = true
  if (!open) e.target.click()
}

const closePopover = (close) => {
  popoverHover.value = false
  if (popoverTimeout.value) clearTimeout(popoverHover.value)
  popoverTimeout.value = setTimeout(() => {
    if (!popoverHover.value) close()
  }, 100)
}
</script>

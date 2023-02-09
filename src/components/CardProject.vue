<template>
  <div
    class="rounded-xl w-full bg-gray-50 shadow-md px-4 py-6 flex flex-col break-inside max-h-64 hover:-translate-y-6 transition duration-500 ease-in-out cursor-pointer"
  >
    <span class="font-bold text-lg text-gray-700">
      {{ data.title }}
    </span>

    <span class="font-normal text-md text-gray-500 text-justify mt-3 break-words text-ellipsis overflow-hidden h-48">
      {{ data.description.substring(0, 180) }} {{ data.description.length > 179 ? '...' : '' }}
    </span>

    <ul class="flex -space-x-1">
      <li v-for="member in data.member.length > 3 ? data.member.slice(0, 3) : data.member" :key="member.no">
        <img
          data-tooltip-target="tooltip-dark-{{ member.no }}"
          data-tooltip-style="light"
          class="w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
          src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
          alt=""
        />

        <div
          id="tooltip-dark-{{ member.no }}"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg shadow-sm opacity-0 tooltip"
        >
          {{ member.nama }}
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </li>
      <li v-if="number > 3">
        <div
          class="bg-gray-500 text-white text-xs flex items-center justify-center w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
        >
          +{{ number - 5 }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { onMounted } from 'vue'

import { initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initTooltips()
})

const props = defineProps({
  data: Object,
})

const number = props.data.member.length
</script>

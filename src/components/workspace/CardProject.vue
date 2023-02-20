<template>
  <div
    @contextmenu="onContextMenu($event)"
    class="rounded-xl w-full bg-gray-50 shadow-md px-4 py-6 flex flex-col break-inside max-h-72 hover:-translate-y-6 transition duration-500 ease-in-out cursor-pointer"
  >
    <span class="font-bold text-lg text-gray-700">
      {{ data?.title }}
    </span>

    <span class="font-normal text-md text-gray-500 text-justify mt-3 break-words text-ellipsis overflow-hidden h-48">
      {{ data?.description.substring(0, 180) }}
      {{ data?.description.length > 160 ? '...' : '' }}
    </span>

    <div class="my-4 flex items-center w-full justify-between">
      <div class="flex space-x-2 items-center">
        <ClockIcon class="w-8 h-8 text-gray-500" />
        <span class="ml-2">Time Left:</span>
      </div>

      <span class="font-medium text-md justify-self-end">{{
        data?.status == 'Draft' ? 'N/A' : data?.status == 'Completed' ? '-' : this.$moment(data?.deadline_date).fromNow(true)
      }}</span>
    </div>

    <div class="flex justify-between text-gray-500 items-center">
      <ul class="flex -space-x-1">
        <li v-for="member in data?.member.length > 3 ? data?.member.slice(0, 3) : data?.member" :key="member.no">
          <Avatar :source="'https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg'" />
        </li>
        <li v-if="number > 3">
          <div
            class="bg-gray-500 text-white text-xs flex items-center justify-center w-8 h-8 border-2 border-custom-accent-green rounded-full hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer"
          >
            +{{ number - 5 }}
          </div>
        </li>
      </ul>
      <span
        :class="[
          data?.status == 'Completed' ? 'bg-custom-accent-green text-white' : data?.status == 'Ongoing' ? 'bg-custom-accent-orange text-white' : 'bg-green-100',
        ]"
        class="rounded-md px-2 py-1"
        >{{ data?.status }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from '@heroicons/vue/24/outline'
import { computed } from '@vue/runtime-core'
import { defineComponent } from 'vue'
import ContextMenu from '@imengyu/vue3-context-menu'
import Avatar from '../Avatar.vue'
import { ref, h } from 'vue'

// initialize components based on data attribute selectors
const showRightMenu = ref(false)
const props = defineProps({
  data: Object,
})
const number = props.data ? props.data?.member.length : 0

function onContextMenu(e: MouseEvent) {
  //prevent the browser's default menu
  e.preventDefault()
  //show your menu
  ContextMenu.showContextMenu({
    theme: 'mac dark',
    items: [
      {
        label: 'Detail',
        divided: true,
        onClick: () => alert(props.data?.title),
      },
      {
        label: 'Delete',
        onClick: () => alert('Click Simple item'),
      },
    ],
    iconFontClass: 'iconfont',
    customClass: 'class-a',
    zIndex: 3,
    minWidth: 230,
    x: e.x,
    y: e.y,
  })
}
</script>

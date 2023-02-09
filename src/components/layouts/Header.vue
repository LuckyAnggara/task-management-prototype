<template>
  <div class="p-4 sm:ml-64 bg-white">
    <!-- LOGO -->
    <div
      class="py-3 grid grid-cols-5 grid-flow-row-dense sm:divide-x-2 divide-gray-500"
    >
      <div class="ml-3 col-span-4 flex justify-between items-center mr-8">
        <span class="text-3xl font-medium text-gray-600 items-center flex"
          >Dashboard</span
        >
        <NotificationPopover />
      </div>

      <div class="col-span-1 flex flex-col">
        <UserAvatar />
      </div>
    </div>
    <hr class="solid mb-6 border-gray-500" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initModals } from 'flowbite'
import NotificationPopover from '../NotificationPopover.vue'
import UserAvatar from '../UserAvatar.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initModals()
})
</script>

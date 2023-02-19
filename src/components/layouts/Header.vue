<template>
  <nav
    class="sm:px-8 py-4 fixed w-full z-20 top-0 bg-white px-8 shadow sm:shadow-none"
  >
    <div
      class="sm:ml-64 py-3 flex flex-wrap justify-between border-b-gray-500 border-b-2"
    >
      <div class="py-3 flex items-center">
        <span class="text-3xl font-medium text-gray-600">{{ title }}</span>
      </div>
      <div class="flex items-center">
        <NotificationPopover class="mr-1 sm:mr-5" />

        <UserAvatar class="" />
      </div>
    </div>
    <!-- <hr class="sm:ml-64 solid border-gray-500" /> -->
  </nav>
</template>
<!-- 
<template>
  <nav class="fixed w-full top-0 py-4 px-4 sm:ml-64 bg-white">
      <div class="py-3 flex justify-between items-center">
        <div>
          <span class="text-3xl font-medium text-gray-600 justify-self-start">{{ title }}</span>
        </div>
        <div class="grow"></div>
        <div class="justify-self-end flex items-center">
          <NotificationPopover class="mr-1 sm:mr-5" />

          <UserAvatar class="justify-self-end" />
        </div>
      </div>
      <hr class="solid border-gray-500" />
  </nav>
</template> -->

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NotificationPopover from '../NotificationPopover.vue'
import UserAvatar from '../UserAvatar.vue'

const route = useRoute()

console.info(route.meta)

const title = computed(() => {
  return route.meta.title
})
</script>

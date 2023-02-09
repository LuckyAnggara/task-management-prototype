<template>
  <div class="fixed w-min top-0 py-4 px-4 sm:ml-64 bg-white">
    <!-- LOGO -->
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
  </div>
</template>

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

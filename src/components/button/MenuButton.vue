<template>
  <router-link :to="{ name: navName }">
    <a
      class="flex items-center py-2 px-3 text-base font-normal rounded-lg cursor-pointer h-14"
      :class="[
        menuId == activeId
          ? 'bg-custom-accent-green text-white'
          : 'text-gray-500 hover:text-custom-accent-green hover:scale-110 transition ease-in-out duration-300 hover:-translate-y-1 ',
      ]"
    >
      <div class="">
        <slot name="icon"></slot>
      </div>
      <span class="ml-3">
        <slot name="text"></slot>
      </span>
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    menuId: Number,
    activeId: Number,
    navName: String,
    params: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    return {}
  },
}
</script>

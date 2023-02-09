<template>
  <a
    class="flex items-center py-2 px-3 text-base font-normal rounded-lg cursor-pointer h-14"
    :class="[
      menuId == activeId
        ? 'bg-custom-accent-green text-white'
        : 'text-gray-500 hover:text-custom-accent-green',
    ]"
  >
    <slot name="icon"></slot>
    <span class="ml-3">
      <slot name="text"></slot>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    menuId: Number,
    activeId: Number,
  },
  setup(props) {
    return {}
  },
}
</script>

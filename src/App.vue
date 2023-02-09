<!-- <template>
  <div class="flex h-screen">
    <Sidebar />
    <MainPage />
  </div>
</template>

<script>
import Sidebar from './view/task/Sidebar.vue'
import MainPage from './view/task/MainPage.vue'

export default {
  components: {
    MainPage,
    Sidebar,
  },
}
</script> -->

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import LayoutFull from './layouts/LayoutFull.vue'
import LayoutContent from './layouts/LayoutContent.vue'

export default {
  components: {
    LayoutFull,
    LayoutContent,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === 'layout-full') return 'layout-full'
      return 'layout-content'
    },
  },
}
</script>

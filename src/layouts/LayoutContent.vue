<script>
import SideMenu from '../components/layouts/SideMenu.vue'
import Header from '../components/layouts/Header.vue'
import MainContent from '../components/layouts/MainContent.vue'

export default {
  setup() {},
  components: { SideMenu, Header, MainContent },
}
</script>

<template>
  <div class="md:flex flex-col justify-between">
    <SideMenu />
    <Header />
    <MainContent />
  </div>
</template>

<template>
  <TransitionGroup
    tag="div"
    name="list"
    class="container my-12 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-4 max-w-full"
  >
    <div v-for="project in projectStore.sortedArray" :key="project.id">
      <CardProject :data="project" />
    </div>
  </TransitionGroup>
</template>

<script setup>
import CardProject from './CardProject.vue'
import { useProjectStore } from '../../stores/project'

const projectStore = useProjectStore()
</script>

<style>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

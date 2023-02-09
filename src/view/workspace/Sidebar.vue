<template>
  <div class="bg-black w-1/6 h-screen text-white p-4">
    <div class="h-16 p-2 flex items-center justify-center mb-4">
      <div
        class="w-full bg-black rounded-md p-4 border-2 border-gray-200 flex items-center hover:bg-gray-800 cursor-pointer"
        @click="addTask"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <div class="text-white text-sm ml-3">New Task</div>
      </div>
    </div>
    <div class="overflow-y-auto">
      <nav class="py-1 px-2" v-for="item in taskStore.data" :key="item.id">
        <TaskComponent
          :data="item"
          :activeId="activeId"
          :editStatus="item.editState"
          @click="active(item.id)"
        />
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import TaskComponent from '../../components/TaskComponent.vue'
import { useTaskStore } from '../../stores/task'

export default {
  setup() {
    const taskStore = useTaskStore()
    const activeId = ref(1)

    function active(id) {
      activeId.value = id
      taskStore.active(id)
    }

    function addTask() {
      const b = taskStore.addTask()
      activeId.value = b.id
    }

    return {
      taskStore,
      activeId,
      active,
      addTask,
    }
  },
  components: {
    TaskComponent,
  },
}
</script>

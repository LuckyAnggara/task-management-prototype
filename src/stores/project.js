import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { projects } from '../mock/project'
import axios from 'axios'

export const useProjectStore = defineStore('project', {
  state: () => ({
    data: [],
    dataActive: 0,
    isLoading: false,
  }),
  getters: {
    dataProject: (state) => state.data,
  },
  actions: {
    getData() {
      this.isLoading = true
      setTimeout(() => {
        const data = projects
        this.data.value = data
      }, 500)
      this.isLoading = false
      console.info(this.isLoading)
    },
  },
})

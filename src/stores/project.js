import { defineStore } from 'pinia'
import { projects } from '../mock/project'
import axios from 'axios'

export const useProjectStore = defineStore('project', {
  state: () => ({
    data: [],
    dataActive: 0,
    isLoading: true,
    isGrid: true,
    searchValue: '',
    filterActive: {
      id: 0,
      name: 'All Projects',
    },
    viewActive: 'GRID',
    viewList: ['GRID', 'LIST', 'TABLE'],
    isDesc: true,
    dataLength: [0, 10, 25, 50],
    showDataLength: 10,
    filterList: [
      {
        id: 0,
        name: 'All Projects',
      },
      {
        id: 1,
        name: 'Ongoing',
      },
      {
        id: 2,
        name: 'Completed',
      },
      {
        id: 3,
        name: 'Draft',
      },
    ],
  }),
  getters: {
    dataProject: (state) => state.data,
    sortedArray: (state) => {
      let tempData = state.data

      // Process search input
      if (state.searchValue != '' && state.searchValue) {
        tempData = tempData.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(state.searchValue.toUpperCase())
        })
      }

      // Filter out by cooking time
      if (state.filterActive.id > 0) {
        tempData = tempData.filter((item) => {
          return item.status == state.filterActive.name
        })
      }

      // Show sorted array in descending or ascending order
      if (state.isDesc) {
        tempData.reverse()
      }
      if (state.viewActive == 'TABLE') {
        if (state.showDataLength > 0) {
          return tempData.slice(0, state.showDataLength)
        }
      } else {
        return tempData.slice(0, state.data.length)
      }

      return tempData
    },
  },
  actions: {
    async getData() {
      this.isLoading = true
      const data = projects
      this.data = data
      setTimeout(() => {
        this.isLoading = false
      }, 200)
    },

    filterData() {},
  },
})

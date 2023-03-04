import { defineStore } from 'pinia'
import { projects } from '../mock/project'
import axios from 'axios'
export const useProjectStore = defineStore('project', {
  state: () => ({
    data: [],
    dataActive: 0,
    draggableComponentData: {
      id: '',
      index: '',
      toId: '',
      fromId: '',
    },
    isLoading: true,
    isGrid: true,
    searchValue: '',
    filterActive: {
      id: 0,
      name: 'All Projects',
    },
    paggination: {
      currentPage: 1,
      from: 0,
      to: 0,
    },
    count: 0,
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
        name: 'Idea',
      },
      {
        id: 2,
        name: 'Ongoing',
      },
      {
        id: 3,
        name: 'Completed',
      },
      {
        id: 4,
        name: 'In Review',
      },
    ],
    // listViewData: [],
  }),
  getters: {
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

      if (state.viewActive == 'LIST') {
        return tempData
      } else {
        if (state.filterActive.id > 0) {
          tempData = tempData.filter((item) => {
            return item.status == state.filterActive.name
          })
        }
      }

      // Show sorted array in descending or ascending order
      if (state.isDesc) {
        tempData.reverse()
      }

      if (state.viewActive == 'TABLE') {
        if (state.showDataLength > 0) {
          const start =
            (state.paggination.currentPage - 1) * state.showDataLength
          const end = start + state.showDataLength
          return tempData.slice(start, end)
        }
      } else {
        return tempData.slice(0, state.data.length)
      }

      return tempData
    },
    listViewData: (state) => {
      return [
        {
          title: 'Idea',
          projects: state.sortedArray.filter((item) => {
            return item.status == 'Idea'
          }),
        },
        {
          title: 'Ongoing',
          projects: state.sortedArray.filter((item) => {
            return item.status == 'Ongoing'
          }),
        },
        {
          title: 'In Review',
          projects: state.sortedArray.filter((item) => {
            return item.status == 'In Review'
          }),
        },
        {
          title: 'Completed',
          projects: state.sortedArray.filter((item) => {
            return item.status == 'Completed'
          }),
        },
      ]
    },
    totalPages(state) {
      return Math.ceil(state.data.length / state.showDataLength)
    },
  },
  actions: {
    prevPage() {
      this.paggination.currentPage--
    },
    nextPage() {
      console.info('aa')
      this.paggination.currentPage++
    },
    async getData() {
      this.isLoading = true
      const data = projects
      this.data = data
      setTimeout(() => {
        this.isLoading = false
      }, 200)
    },
    changeStatusDraggableData() {
      let index = this.data.findIndex(
        (e) => e.id == this.draggableComponentData.id
      )
      this.data[index].status = this.draggableComponentData.toId
    },
  },
})

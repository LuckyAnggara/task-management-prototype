import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { projects } from '../mock/project'

export const useProjectStore = defineStore('project', () => {
  const data = reactive(projects)
  const dataActive = ref(0)

  function active(id) {
    dataActive.value = data.findIndex((x) => x.id == id)
  }

  function addTask() {
    var latestId = 0

    data.forEach((el) => {
      if (latestId < el.id) {
        latestId = el.id
      }
    })

    const newData = {
      id: latestId + 1,
      editState: true,
      name: '',
    }

    data.push(newData)
    return newData
  }

  function addMember(index, member) {
    const exist = data[index].member.filter((x) => x.nip == member.nip)
    if (exist.length > 0) {
      return false
    } else {
      data[index].member.push(member)
      return true
    }
  }

  return { data, dataActive, active, addTask, addMember }
})

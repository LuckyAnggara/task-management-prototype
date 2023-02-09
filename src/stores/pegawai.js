import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { datadata } from '../mock/pegawai'

export const usePegawaiStore = defineStore('pegawai', () => {
  const data = reactive(datadata)
  const findValueMember = ref('')

  const isLoading = ref(false)

  function findPegawai() {
    if (this.findValueMember !== '') {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)

      return data
        .filter(
          (x) =>
            x.nip.match(this.findValueMember) ||
            x.nama.includes(this.findValueMember.toUpperCase()) ||
            x.jabatan.includes(this.findValueMember.toUpperCase())
        )
        .slice(0, 5)
    }
    return []
  }

  function resetState() {
    console.info('reset state')
    findValueMember.value = ''
    isLoading.value = false
    data.value = datadata
  }

  return { data, findValueMember, isLoading, findPegawai, resetState }
})

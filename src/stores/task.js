import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const data = reactive([
    {
      id: 1,
      name: 'Pemetaan Manajemen Risiko',
      member: [
        {
          no: '4',
          nip: '196310011991032001',
          nama: 'LULUK RATNANINGTYAS, S.H., M.Hum.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2017-04-01',
          jabatan: 'INSPEKTUR WILAYAH VI',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH VI',
          pendidikan: 'S2',
        },
        {
          no: '5',
          nip: '196404251990011001',
          nama: 'Drs. MARASIDIN, Bc.I.P., M.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2021-04-01',
          jabatan: 'INSPEKTUR WILAYAH V',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH V',
          pendidikan: 'S2',
        },
        {
          no: '6',
          nip: '196304171983031001',
          nama: 'ICON SIREGAR, S.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2022-04-01',
          jabatan: 'INSPEKTUR WILAYAH I',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH I',
          pendidikan: 'S1',
        },
      ],
      editState: false,
    },
    {
      id: 2,
      name: 'Penyusunan SK TIM MR',
      member: [
        {
          no: '4',
          nip: '196310011991032001',
          nama: 'LULUK RATNANINGTYAS, S.H., M.Hum.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2017-04-01',
          jabatan: 'INSPEKTUR WILAYAH VI',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH VI',
          pendidikan: 'S2',
        },
        {
          no: '5',
          nip: '196404251990011001',
          nama: 'Drs. MARASIDIN, Bc.I.P., M.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2021-04-01',
          jabatan: 'INSPEKTUR WILAYAH V',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH V',
          pendidikan: 'S2',
        },
        {
          no: '6',
          nip: '196304171983031001',
          nama: 'ICON SIREGAR, S.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2022-04-01',
          jabatan: 'INSPEKTUR WILAYAH I',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH I',
          pendidikan: 'S1',
        },
      ],
      editState: false,
    },
    {
      id: 3,
      name: 'Pelakasanaan Rapat Masukan',
      member: [
        {
          no: '4',
          nip: '196310011991032001',
          nama: 'LULUK RATNANINGTYAS, S.H., M.Hum.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2017-04-01',
          jabatan: 'INSPEKTUR WILAYAH VI',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH VI',
          pendidikan: 'S2',
        },
        {
          no: '5',
          nip: '196404251990011001',
          nama: 'Drs. MARASIDIN, Bc.I.P., M.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2021-04-01',
          jabatan: 'INSPEKTUR WILAYAH V',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH V',
          pendidikan: 'S2',
        },
        {
          no: '6',
          nip: '196304171983031001',
          nama: 'ICON SIREGAR, S.H.',
          pangkat: 'IVd',
          gol_ruang: 'Pembina Utama Madya',
          tmt_pangkat: '2022-04-01',
          jabatan: 'INSPEKTUR WILAYAH I',
          tmt_jabatan: '2022-03-10',
          eselon: 'IIa',
          unit: 'INSPEKTORAT WILAYAH I',
          pendidikan: 'S1',
        },
      ],
      editState: false,
    },
  ])

  // const dataActive = ref({
  //   id: 1,
  //   name: 'Pemetaan Manajemen Risiko',
  //   member: [
  //     { name: 'Lucky', role: '' },
  //     { name: 'Bobby', role: '' },
  //   ],
  //   editState: false,
  // })

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

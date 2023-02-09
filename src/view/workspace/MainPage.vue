<template>
  <div class="flex-1 bg-custom-white text-custom-black px-8 py-8">
    <div class="grid grid-cols-2 divide-x">
      <div class="h-16 p-4 flex items-start">
        <div class="text-3xl font-medium mr-2">
          {{ taskStore.data[taskStore.dataActive].name }}
        </div>

        <div class="cursor-pointer" @click="edit">
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      </div>
      <div class="h-16 py-4 px-8 flex justify-end">
        <!-- <div class="flex mb-5 -space-x-3"> -->
        <MemberPopover
          :dataMember="taskStore.data[taskStore.dataActive].member"
          @open-dialog="openDialog()"
          class="mr-4"
        />

        <!-- </div> -->
        <ShareButton />
      </div>
    </div>

    <Dialog
      :isOpen="isOpen"
      @close-dialog="closeDialog()"
      @open-alert-dialog="openAlertDialog()"
    />
    <AlertDialog :isOpen="isAlertOpen" @close-alert="closeAlertDialog()" />
  </div>
</template>

<script>
import { ref } from 'vue'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useTaskStore } from '../../stores/task'

import { usePegawaiStore } from '../../stores/pegawai'
import AlertDialog from '../../components/dialog/AlertDialog.vue'

import Dialog from '../../components/dialog/Dialog.vue'
import MemberPopover from '../../components/MemberPopover.vue'
import ShareButton from '../../components/ShareButton.vue'

export default {
  setup() {
    const taskStore = useTaskStore()
    const pegawaiStore = usePegawaiStore()

    const isOpen = ref(false)
    const isAlertOpen = ref(false)

    function openDialog() {
      isOpen.value = true
    }

    function closeDialog() {
      pegawaiStore.resetState()
      isOpen.value = false
    }

    function openAlertDialog() {
      isAlertOpen.value = true
    }

    function closeAlertDialog() {
      pegawaiStore.resetState()
      isAlertOpen.value = false
    }

    return {
      closeDialog,
      isOpen,
      isAlertOpen,
      openDialog,
      openAlertDialog,
      closeAlertDialog,
      taskStore,
    }
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Dialog,
    MemberPopover,
    ShareButton,
    AlertDialog,
  },
}
</script>

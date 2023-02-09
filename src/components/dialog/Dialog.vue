<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform p-6 text-left align-middle transition-all"
            >
              <button
                type="button"
                @click="$emit('closeDialog')"
                class="absolute top-3 z-10 right-4 hover:bg-gray-200 bg-white text-black hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div
                class="bg-black w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all"
              >
                <div class="flex mb-4">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-100"
                  >
                    Assign new member
                  </DialogTitle>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-400">
                    Find by Name or NIP and assign new member to this Task, this
                    will notify that member.
                  </p>
                </div>

                <div class="mt-4 mb-6">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >Search Member</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      v-model="pegawaiStore.findValueMember"
                      @keyup.enter="findPegawai"
                      type="search"
                      id="default-search"
                      class="block w-full p-4 pl-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Name, NIP..."
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-col space-y-4 text-white">
                  <Loader
                    class="place-self-center"
                    v-if="pegawaiStore.isLoading"
                  />
                  <div
                    v-else
                    v-for="pegawai in listPegawai"
                    :key="pegawai.id"
                    class="hover:bg-gray-800 p-4 rounded-md cursor-pointer flex items-center"
                    @click="addMember(pegawai)"
                  >
                    <img
                      class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
                      alt=""
                    />
                    <div
                      class="ml-4 justify-start text-start text-base text-white"
                    >
                      <p>{{ pegawai.nama }}</p>
                      <p>{{ pegawai.nip }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { nextTick, ref } from 'vue'
import { useTaskStore } from '../../stores/task'
import { usePegawaiStore } from '../../stores/pegawai'

import Loader from '../Loader.vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const valuePegawai = ref('')
    const pegawaiStore = usePegawaiStore()
    const taskStore = useTaskStore()
    const listPegawai = ref([])

    function findPegawai() {
      listPegawai.value = pegawaiStore.findPegawai(valuePegawai.value)
    }

    function addMember(member) {
      const result = taskStore.addMember(taskStore.dataActive, member)
      console.info(result)
      emit('closeDialog')
      nextTick()
      emit('openAlertDialog')

      if (result == true) {
      } else {
      }
    }
    return {
      listPegawai,
      valuePegawai,
      findPegawai,
      addMember,
      pegawaiStore,
    }
  },
  components: {
    TransitionRoot,
    TransitionChild,
    DialogPanel,
    Dialog,
    DialogTitle,
    Loader,
  },
}
</script>

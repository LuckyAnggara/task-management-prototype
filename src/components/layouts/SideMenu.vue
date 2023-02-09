<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-200 flex flex-col">
      <!-- LOGO -->
      <div class="py-6">
        <span class="ml-3 text-3xl font-medium text-gray-500">myJournal</span>
      </div>

      <hr class="solid mb-6 border-gray-500" />

      <!-- MENU -->

      <div class="">
        <ul class="space-y-3">
          <li v-for="menu in listMenuTop" :key="menu.id">
            <MenuButton
              :menu-id="menu.id"
              :active-id="currentMenu"
              @click="currentMenu = menu.id"
            >
              <template v-slot:icon>
                <component :is="menu.icon" class="h-6 w-6"></component>
              </template>
              <template v-slot:text> {{ menu.name }} </template>
            </MenuButton>
          </li>
        </ul>
      </div>

      <!-- NEWS -->

      <hr class="solid mt-6 border-gray-500" />

      <!-- Favorites -->
      <p class="ml-2 mt-3 text-gray-500">Favorites</p>

      <div class="mt-3">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:text-custom-accent-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <span class="ml-3 text-gray-500 truncate">Manajemen Risiko</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-red-500 rounded-lg hover:text-custom-accent-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <span class="ml-3 text-gray-500 truncate"
                >Kegiatan Deklarasi</span
              >
            </a>
          </li>
        </ul>
      </div>

      <!-- USER MENU -->
      <div class="mt-4 h-full justify-end flex flex-col">
        <InfoSideBar />

        <ul class="space-y-2">
          <li v-for="menu in listMenuBottom" :key="menu.id">
            <MenuButton
              :menu-id="menu.id"
              :active-id="currentMenu"
              @click="currentMenu = menu.id"
            >
              <template v-slot:icon>
                <component :is="menu.icon" class="h-6 w-6"></component>
              </template>
              <template v-slot:text> {{ menu.name }} </template>
            </MenuButton>
          </li>
          <!-- <li>
            <a
              class="flex p-2 text-base font-normal rounded-lg justfiy-start"
              :class="[
                index == 3
                  ? 'bg-custom-accent-green text-white'
                  : 'text-gray-500 hover:text-custom-accent-green',
              ]"
              @click="index = 3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                />
              </svg>

              <span class="ml-3">Inbox</span>
              <span
                class="flex items-center justify-center w-3 h-3 p-3 ml-24 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:text-green-300"
                >99</span
              >
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex p-2 text-base font-normal text-gray-500 rounded-lg hover:text-custom-accent-green justfiy-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <span class="ml-3">Login</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import {
  RectangleGroupIcon,
  FolderIcon,
  ClipboardIcon,
  InboxIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import InfoSideBar from './InfoSideBar.vue'
import MenuButton from '../button/MenuButton.vue'
export default {
  setup() {
    const currentMenu = ref(0)
    const listMenuTop = reactive([
      {
        id: 0,
        name: 'Dashboard',
        icon: 'RectangleGroupIcon',
      },
      {
        id: 1,
        name: 'Workspace',
        icon: 'FolderIcon',
      },
      {
        id: 2,
        name: 'Board',
        icon: 'ClipboardIcon',
      },
    ])

    const listMenuBottom = reactive([
      {
        id: 3,
        name: 'Inbox',
        icon: 'InboxIcon',
      },
      {
        id: 4,
        name: 'Logout',
        icon: 'ArrowLeftOnRectangleIcon',
      },
    ])
    return {
      listMenuTop,
      listMenuBottom,
      currentMenu,
    }
  },
  components: {
    InfoSideBar,
    MenuButton,
    RectangleGroupIcon,
    FolderIcon,
    ClipboardIcon,
    InboxIcon,
    UserIcon,
    ArrowLeftOnRectangleIcon,
  },
}
</script>

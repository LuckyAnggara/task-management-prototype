<template>
  <aside class="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0">
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
            <MenuButton :menu-id="menu.id" :active-id="currentMenu" @click="currentMenu = menu.id" :nav-name="menu.to">
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
            <a href="#" class="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:text-custom-accent-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
            <a href="#" class="flex items-center p-2 text-base font-normal text-red-500 rounded-lg hover:text-custom-accent-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <span class="ml-3 text-gray-500 truncate">Kegiatan Deklarasi</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- USER MENU -->
      <div class="mt-4 h-full justify-end flex flex-col">
        <InfoSideBar />

        <ul class="space-y-2">
          <li v-for="menu in listMenuBottom" :key="menu.id">
            <MenuButton :menu-id="menu.id" :active-id="currentMenu" @click="currentMenu = menu.id">
              <template v-slot:icon>
                <component :is="menu.icon" class="h-6 w-6"></component>
              </template>
              <template v-slot:text> {{ menu.name }} </template>
            </MenuButton>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { RectangleGroupIcon, FolderIcon, ClipboardIcon, InboxIcon, UserIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
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
        to: 'dashboard',
      },
      {
        id: 1,
        name: 'Workspace',
        icon: 'FolderIcon',
        to: 'workspace',
      },
      {
        id: 2,
        name: 'Board',
        icon: 'ClipboardIcon',
        to: 'board',
      },
    ])

    const listMenuBottom = reactive([
      {
        id: 3,
        name: 'Inbox',
        icon: 'InboxIcon',
        to: 'inbox',
      },
      {
        id: 4,
        name: 'Logout',
        icon: 'ArrowLeftOnRectangleIcon',
        to: 'logout',
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

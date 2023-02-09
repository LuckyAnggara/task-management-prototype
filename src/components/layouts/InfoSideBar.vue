<template>
  <div class="p-4 mt-6 mb-6 rounded-lg bg-green-100">
    <div class="flex items-center mb-3">
      <span
        class="bg-gray-100 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
        >Beta</span
      >
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-900 rounded-lg focus:ring-2 focus:ring-green-400 p-1 hover:bg-green-200 inline-flex h-6 w-6 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800"
        data-dismiss-target="#dropdown-cta"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="w-4 h-4"
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
      </button>
    </div>
    <p class="mb-3 text-sm text-green-800 dark:text-green-400">
      Preview the new Flowbite dashboard navigation! You can turn the new
      navigation off for a limited time in your profile.
    </p>
    <a
      class="text-sm text-green-800 underline hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
      href="#"
      >Turn new navigation off</a
    >
  </div>
</template>

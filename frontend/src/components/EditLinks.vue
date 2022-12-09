<template>
  <div class="h-screen flex justify-center bg-slate-200">
    <div
      class="flex flex-col w-full gap-3 justify-center items-center text-neutral-700"
    >
      <div class="bg-slate-50 rounded-md p-11 xl:w-4/12 lg:w-5/12 sm:w-6/12">
        <button
          type="button"
          @click="$router.push('/dashboard')"
          class="text-black-700"
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <span class="sr-only">Icon description</span>
        </button>
        <h1 class="font-bold text-2xl flex justify-center">Edit Link</h1>
        <h1 class="text-sm text-slate-400 mt-1 flex justify-center">
          You can edit your link or your custom back-half.
        </h1>
        <div class="mt-8 grid gap-3 grid-cols-1">
          <div>
            <label class="font-semibold">Destination</label>
            <input
              placeholder="Enter your raw link"
              type="text"
              v-model="App.input.editlink.rawlinks"
              class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="font-semibold">Custom back-half</label>
            <input
              placeholder="Enter your custom link"
              type="text"
              v-model="App.input.editlink.customlinks"
              class="h-9 mt-1 border-slate-300 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div class="mt-3 text-sm flex justify-center">
            <button
              @click="App.editLinks(App.input.editlink)"
              class="py-2 w-1/2 font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div class="justify-center grid">
        <!-- <button
          @click="$router.push('/dashboard')"
          class="text-3xl text-indigo-500 font-semibold rounded-full"
        >
          &#8249;
        </button> -->
        <!-- <button
          type="button"
          @click="$router.push('/dashboard')"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
          <span class="sr-only">Icon description</span>
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { useApp } from "../stores/index";

export default {
  setup() {
    const App = useApp();
    return {
      App,
    };
  },
  mounted() {
    this.App.links.forEach((link) => {
      if (this.$route.params.id == link.id) {
        this.App.input.editlink = link;
      }
    });
  },
  created() {},
};
</script>

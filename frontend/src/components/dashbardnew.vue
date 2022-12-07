<template>
    <div class="flex h-full w-full">
    <div class="flex w-full">
      <div class="w-1/4 h-full bg-indigo-100"></div>
      <div class="w-3/4 h-full flex flex-col bg-slate-100">
        <div class="flex-row flex mt-20 ml-14">
          <p class="text-3xl font-extrabold mr-3 text-indigo-500">#</p>
          <p class="text-3xl font-bold text-gray-600">Dashboard</p>
        </div>
        <div
          class="flex flex-col gap-4 ml-14 mb-6 mt-10 px-11 py-6 rounded-3xl bg-white h-7/12 w-4/5 drop-shadow-sm"
        >
          <div class="">
            <h1 class="font-bold text-2xl flex text-gray-600">Shorten Links</h1>
            <h1 class="text-sm text-gray-500">
              Input your destination link and custom back-half
            </h1>
          </div>
          <div class="text-gray-600 flex flex-col">
            <label for="email" class="font-semibold">Destination</label>
            <input
              placeholder="Enter your destination link"
              type="url"
              v-model="App.input.links.rawlinks"
              class="h-9 bg-slate-100 border-none mt-1 rounded-md w-full bg-gw focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <div class="mt-2">
              <label for="email" class="font-semibold mr-28">Our Domain</label>
              <label for="email" class="font-semibold ml-2">Custom back-half</label>
            </div>
            <div class="flex">
              <input
                placeholder="localhost:5173"
                type="url"
                disabled
                class="h-9 bg-slate-200 border-none mt-1 mb-2 rounded-md w-3/12 bg-gw focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <p class="flex mx-3 mb-2 justify-center items-center text-lg">
                /
              </p>
              <input
                placeholder="Enter your custom back"
                type="text"
                v-model="App.input.links.customlinks"
                class="h-9 bg-slate-100 border-none mt-1 mb-2 rounded-md w-6/12 bg-gw focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button
                @click="App.addLinks(App.input.links)"
                class="h-9 w-3/12 ml-4 mt-1 font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div
          v-for="link in App.links"
          :key="link.id"
          class="flex justify-between ml-14 mt-4 px-11 py-7 rounded-xl bg-white h-7/12 w-4/5 drop-shadow-sm"
        >
          <div class="flex flex-col">
            <h1 class="font-bold text-xl flex text-gray-600">
              {{ link.customlinks }}
            </h1>
            <div
              @click="
                $router.push({
                  name: 'shorten',
                  params: { custom: link.customlinks },
                })
              "
              class="w-fit text-sm text-gray-500 flex cursor-pointer"
            >
              localhost:5173/{{ link.customlinks }}
            </div>
          </div>
          <div class="flex gap-4 items-center text-xs">
            <div>clickcount+icon</div>
            <div>icon copy ?</div>
            <!-- ini masih bingung soalnya gangerti cara kerja fungsi copynya gimana -->
            <div>icon edit</div>
            <div>icon delete</div>
          </div>
        </div>
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
  created() {
    this.App.getlinks();
  },
};
</script>

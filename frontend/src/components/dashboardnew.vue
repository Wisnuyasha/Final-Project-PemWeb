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
              <div class="flex flex-row">
                <label for="email" class="font-semibold mr-2"
                  >Our Domain
                </label>
                <div class="flex items-center justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-[1.2rem] h-[1.2rem] flex items-center justify-center mb-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>

                <label for="email" class="font-semibold ml-24"
                  >Custom back-half</label
                >
              </div>
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
            <!-- Copy Button -->
            <button
              class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-900 transition-colors duration-15 rounded-full focus:shadow-outline hover:text-blue-600"
              @click=""
            >
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
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </button>
            <!-- ini masih bingung soalnya gangerti cara kerja fungsi copynya gimana -->
            <!-- EDIT BUTTON -->
            <button
              class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-900 transition-colors duration-15 rounded-full focus:shadow-outline hover:text-blue-600"
              @click="$router.push({ name: 'edit', params: { id: link.id } })"
            >
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
            </button>
            <!-- DELETE BUTTON -->
            <button
              @click="
                App.deleteLinks(App.input.editlink.id),
                  $router.push('/dashboard')
              "
              class="py-2 font-semibold rounded-md text-gray-900 bg-white hover:text-red-600 active:bg-indigo-600"
            >
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
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

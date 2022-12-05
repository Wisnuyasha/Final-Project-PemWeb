<template>
    <div class="h-screen flex justify-center bg-slate-200">
        <div class="flex flex-col w-full gap-3 justify-center items-center text-neutral-700">
        <div class="bg-slate-50 rounded-md p-11 xl:w-4/12 lg:w-5/12 sm:w-6/12">
            <h1 class="font-bold text-2xl flex justify-center">
                Edit Link</h1>
            <h1 class="text-sm text-slate-400 mt-1 flex justify-center">
                You can edit your link or your custom back-half.</h1>
            <div class="mt-8 grid gap-3 grid-cols-1">
            <div>
                <label class="font-semibold">Destination</label>
                <input placeholder="Enter your raw link" type="text" v-model="App.input.user.email" class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 active:outline-indigo-700"/>
            </div>
            <div>
                <label class="font-semibold">Custom back-half</label>
                <input placeholder="Enter your custom link" type="password" v-model="App.input.user.password" class="h-9 mt-1 border-slate-300 rounded w-full bg-gray-50"/>
            </div>
            <div class="mt-3 text-sm flex flex-row gap-4 text-center">
                <button class="py-2 w-1/2 font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600">
                    Delete</button>
                <button class="py-2 w-1/2 font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600">
                    Update</button>
            </div>
            </div>
        </div>
        <div class="justify-center grid">
            <button @click="$router.push('/dashboard')" class="text-3xl text-indigo-500 font-semibold rounded-full ">
            &#8249;</button>
        </div>
        </div>
    </div>
</template>
<script>
  import {useApp} from '../stores/index';
  
  export default {
    setup() {
      const App = useApp();
      return {
        App,
      }
    },
    created() {
    }
  }
</script>
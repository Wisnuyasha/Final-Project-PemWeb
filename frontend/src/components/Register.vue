<template>
  <div class="h-screen flex justify-center bg-slate-200">
    <div
      class="flex flex-col w-full gap-8 justify-center items-center text-neutral-700"
    >
      <div class="bg-slate-50 rounded-md p-11 xl:w-4/12 lg:w-5/12 sm:w-6/12">
        <h1 class="font-bold text-2xl flex justify-center">Register</h1>
        <h1 class="text-sm text-slate-400 mt-1 flex justify-center">
          Please sign up your new account
        </h1>
        <div class="mt-8 grid gap-3 grid-cols-1">
          <div>
            <label for="email" class="font-semibold">Email</label>
            <input
              placeholder="Enter your email"
              type="text"
              v-model="App.email"
              class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label for="password" class="font-semibold">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              v-model="App.password"
              class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div class="mt-3 text-sm text-center">
            <button
              @click="App.register(App.email, App.password)"
              class="py-2 w-full font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div class="justify-center grid">
        <h1 class="text-sm">Already have an account ?</h1>
        <button
          @click="$router.push('/login')"
          class="text-sm text-indigo-600 hover:text-indigo-700"
        >
          Login
        </button>
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
  created() {},
};
</script>

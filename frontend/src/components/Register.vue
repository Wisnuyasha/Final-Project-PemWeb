<template>
  <!-- <div class="flex justify-center items-center w-full h-screen bg-neutral-200 text-neutral-900">
    <div class="m-9 p-9 w-96 bg-neutral-50 shadow-lg">
      <h1 class="font-bold text-2xl">Register</h1>
      <h1 class="text-sm">Please fill out all the fields.</h1>

      <div class="mt-8">
        <div class="">
          <div class="grid gap-3 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-5">
              <label for="full_name">Full Name</label>
              <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.name" />
            </div>

            <div class="md:col-span-5">
              <label for="email">Email Address</label>
              <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.email" placeholder="email@domain.com" />
            </div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button @click="App.addUser(App.input.user)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div> -->
  <!-- <div class="flex justify-center items-center w-full h-screen bg-slate-100 text-neutral-800">
    <div class="bg-slate-50 drop-shadow-xl rounded-md p-10 w-96">
      <h1 class="font-bold text-2xl">Register</h1>
      <h1 class="text-sm">Please input your name and email :)</h1>
      <div class="mt-8 grid gap-3 grid-cols-1">
        <div>
          <label for="name" class="font-bold">Name</label>
          <input placeholder="inu" type="text" name="name" id="name" v-model="App.input.user.name" class="h-9 mt-1 rounded w-full bg-gray-50"/>
        </div>
        <div>
          <label for="email" class="font-bold">Email</label>
          <input placeholder="inu@gmail.com" type="text" name="email" id="email" v-model="App.input.user.email" class="h-9 mt-1 rounded w-full bg-gray-50"/>
        </div>
        <div class="mt-1 text-right">
          <button @click="App.addUser(App.input.user)" class="font-bold py-1 px-4 rounded text-slate-50 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 ">Submit</button>
        </div>
      </div>
      <div class="mt-8 justify-center grid">
          <h1 class="text-sm">Already have an account ?</h1>
          <button @click="$router.push('/login')" class="text-sm text-indigo-600 hover:text-indigo-700 active:text-indigo-800 mt-1">Login</button>
      </div>
    </div>
  </div> -->

  <div class="h-screen flex justify-center bg-slate-200">
        <div class="flex flex-col w-full gap-8 justify-center items-center text-neutral-700">
        <div class="bg-slate-50 rounded-md p-11 xl:w-4/12 lg:w-5/12 sm:w-6/12">
            <h1 class="font-bold text-2xl flex justify-center">Register</h1>
            <h1 class="text-sm text-slate-400 mt-1 flex justify-center">Please sign up your new account</h1>
            <div class="mt-8 grid gap-3 grid-cols-1">
            <div>
                <label for="name" class="font-semibold">Name</label>
                <input placeholder="Enter your name" type="text" name="name" id="name" v-model="App.input.user.name" class="h-9 mt-1 border-slate-300 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
            </div>
            <div>
                <label for="email" class="font-semibold">Email</label>
                <input placeholder="Enter your email" type="text" name="email" id="email" v-model="App.input.user.email" class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
            </div>
            <div>
                <label for="password" class="font-semibold">Password</label>
                <input placeholder="Enter your password" type="password" name="email" id="email" v-model="App.input.user.password" class="h-9 border-slate-300 mt-1 rounded w-full bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
            </div>
            <div class="mt-3 text-sm text-center">
                <button @click="App.addUser(App.input.user)" class="py-2 w-full font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600">Submit</button>
            </div>
            </div>
        </div>
        <div class="justify-center grid">
            <h1 class="text-sm">Already have an account ?</h1>
            <button @click="$router.push('/login')" class="text-sm text-indigo-600 hover:text-indigo-700">Login</button>
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

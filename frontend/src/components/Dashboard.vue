<template>
  <!-- Nav Container -->
  <nav class="relative container mx-auto p-6">
    <!-- Flex Container For All Items -->
    <div class="flex items-center justify-between">
      <!-- Flex Container For Logo/Menu -->
      <div class="flex items-center space-x-20">
        <!-- Logo -->
        <img
          src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/11/logo-DTI-border1.png"
          class="w-20 h-20"
          alt=""
        />
        <!-- Left Menu -->
        <div class="hidden space-x-8 font-bold lg:flex">
          <a
            href="#shortenIT"
            class="text-grayishViolet hover:text-veryDarkViolet"
            >Short-IT</a
          >
          <a
            href="#tech-stack"
            class="text-grayishViolet hover:text-veryDarkViolet"
            >Tech Stack</a
          >
          <a href="#about" class="text-grayishViolet hover:text-veryDarkViolet"
            >About Us</a
          >
        </div>
      </div>

      <!-- Right Buttons Menu -->
      <div
        class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex"
      >
        <button
          @click="$router.push('/login')"
          class="hover:text-veryDarkViolet"
        >
          Login
        </button>
        <button
          @click="$router.push('/')"
          class="px-8 py-3 font-bold text-white bg-blue-700 rounded-full hover:opacity-70"
        >
          Sign Up
        </button>
      </div>

      <!-- Hamburger Button -->
      <button
        id="menu-btn"
        class="block hamburger lg:hidden focus:outline-none"
        type="button"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      id="menu"
      class="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
    >
      <div
        class="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm"
      >
        <a href="#" class="w-full text-center">Short-IT</a>
        <a href="#" class="w-full text-center">About Us</a>
        <a href="#" class="w-full text-center">Tech Stack</a>
        <button
          @click="$router.push('/login')"
          class="w-full pt-6 border-t border-gray-400 text-center"
        >
          Login
        </button>
        <button
          @click="$router.push('/')"
          class="w-full py-3 text-center rounded-full bg-blue-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="hero">
    <!-- Hero Container -->
    <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
      <!-- Content Container -->
      <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
        <h1
          class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
        >
          More than just shorter links
        </h1>
        <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="mx-auto lg:mx-0">
          <a
            href="#"
            class="py-5 px-10 text-2xl font-bold text-white bg-blue-700 rounded-full lg:py-4 hover:opacity-70"
            >Get Started</a
          >
        </div>
      </div>

      <!-- Image -->
      <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
        <img src="../assets/images/illustration-working.svg" alt="" />
      </div>
    </div>
  </section>

  <!-- Shorten Section -->
  <section id="shortenIT" class="relative bg-blue-100">
    <!-- Shorten Container -->
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Form -->
      <form
        id="link-form"
        class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-blue-500 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
      >
        <input
          type="text"
          v-model="App.input.links.rawlinks"
          class="flex-1 p-3 border-2 rounded-lg focus:outline-none"
          placeholder="Input your link"
          id="link-input"
        />

        <input
          type="text"
          v-model="App.input.links.customlinks"
          class="flex-1 p-3 border-2 rounded-lg focus:outline-none"
          placeholder="input your custom back-half"
          id="link-input"
        />

        <button
          @click="App.addLinks(App.input.links)"
          class="px-10 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-700Light focus:outline-none md:py-2"
        >
          Shorten It!
        </button>

        <!-- Error Message -->
        <div
          id="err-msg"
          class="absolute left-7 bottom-3 text-red text-sm italic"
        ></div>
      </form>

      <!-- Link 1 -->
      <div
        v-for="link in App.links"
        :key="link.id"
        class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
      >
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          {{ link.rawlinks }}
        </p>

        <div
          class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
        >
          <div class="font-bold text-cyan">
            https://short.IT/{{ link.customlinks }}
          </div>
          <button
            class="p-2 px-8 text-white bg-blue-700 rounded-lg hover:opacity-70 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>

      <!-- Link 2 -->
      <!-- <div
        class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
      >
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          https://www.its.ac.id/it/
        </p>

        <div
          class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
        >
          <div class="font-bold text-cyan">https://rel.ink/gxOXp9</div>
          <button
            class="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div> -->

      <!-- Link 3 -->
      <!-- <div
        class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
      >
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          https://linkedin.com/frontend-mentor
        </p>

        <div
          class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
        >
          <div class="font-bold text-cyan">https://rel.ink/gob3X9</div>
          <button
            class="p-2 px-8 text-white bg-blue-700 rounded-lg hover:opacity-70 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div> -->
    </div>
  </section>

  <!-- Stats Section -->
  <section id="stats" class="py-24 bg-gray-100">
    <div class="container mx-auto px-3">
      <h2 class="text-4xl mb-6 font-bold text-center">Our Team Members</h2>
      <p class="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
        PEMWEB SATSET SATSET KELAR Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nisi, facere.
      </p>
    </div>
  </section>

  <!-- Feature Box Section -->
  <section id="about" class="pb-32 bg-gray-100">
    <div
      class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"
    >
      <!-- Horizontal Line -->
      <div
        class="hidden absolute top-24 w-10/12 left-16 h-3 bg-blue-700 md:block"
      ></div>
      <!-- Vertical Line -->
      <div
        class="absolute w-2 left-1/2 h-full -ml-1 bg-blue-700 md:hidden"
      ></div>

      <!-- Box 1 -->
      <div
        class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
          >
            <img src="../assets/images/icon-brand-recognition.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Wisnuyasha Faizal
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
          totam?
        </p>
      </div>

      <!-- Box 2 -->
      <div
        class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
          >
            <img src="../assets/images/icon-detailed-records.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Dzaki Rozaan
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit?
        </p>
      </div>

      <!-- Box 3 -->
      <div
        class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
          >
            <img src="../assets/images/icon-fully-customizable.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Rangga Aldo S
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, natus.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-32" id="download">
    <div class="container mx-auto px-6">
      <h2 class="mb-6 text-8xl font-semibold text-center md:text-4xl">
        Tech Stack
      </h2>
      <p class="max-w-lg text-2xl mx-auto text-center text-grayishBlue">
        The Frameworks we use for this website
      </p>
    </div>
  </section>

  <!-- Download Boxes -->
  <section id="tech-stack" class="py-32">
    <!-- Boxes Container -->
    <div
      class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
    >
      <!-- Box 1 -->
      <div class="w-full md:w-1/3">
        <div
          class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
        >
          <!-- Image -->
          <div class="flex justify-center">
            <img
              class="w-28 h-28"
              src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
              alt=""
            />
          </div>
          <!-- Text -->
          <h5 class="pt-6 text-xl font-bold">VueJS</h5>
          <p class="text-gray-400">Javascript Framework</p>

          <!-- Dots -->
          <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="https://vuejs.org/guide/introduction.html"
              class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-700 hover:text-blue-700 hover:bg-white border-blue-700"
              >Documentation</a
            >
          </div>
        </div>
      </div>

      <!-- Box 2 -->
      <div class="w-full md:w-1/3">
        <div
          class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
        >
          <!-- Image -->
          <div class="flex justify-center">
            <img
              class="w-28 h-28"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt=""
            />
          </div>
          <!-- Text -->
          <h5 class="pt-6 text-xl font-bold">Tailwind</h5>
          <p class="text-gray-400">CSS Framework</p>

          <!-- Dots -->
          <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="https://tailwindcss.com/docs/installation"
              class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-700 hover:text-blue-700 hover:bg-white border-blue-700"
              >Documentation</a
            >
          </div>
        </div>
      </div>

      <!-- Box 3 -->
      <div class="w-full md:w-1/3">
        <div
          class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16"
        >
          <!-- Image -->
          <div class="flex justify-center">
            <img
              class="w-20 h-20"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <!-- Text -->
          <h5 class="pt-6 text-xl font-bold">ExpressJS</h5>
          <p class="text-gray-400">NodeJS Framework</p>

          <!-- Dots -->
          <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="https://expressjs.com/"
              class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-700 hover:text-blue-700 hover:bg-white border-blue-700"
              >Documentation</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-16 bg-slate-800">
    <!-- Footer Flex Container -->
    <div
      class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
    >
      <!-- Logo/Menu Container -->
      <div
        class="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue"
      >
        <img
          src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/11/logo-DTI-border1.png"
          alt=""
          class="mb-1 w-20 h-20"
        />

        <a href="#shortIT" class="uppercase text-zinc-50 hover:text-red-500"
          >ShortIT</a
        >
        <a href="#tech-stack" class="uppercase text-zinc-50 hover:text-red-500"
          >Tech Stack</a
        >
        <a href="#about" class="uppercase text-zinc-50 hover:text-red-500"
          >About Us</a
        >
      </div>

      <!-- Social Container -->
      <!-- <div class="flex space-x-10">
        <a href="#">
          <img
            src="../assets/images/icon-facebook.svg"
            alt=""
            class="h-6 ficon"
          />
        </a>
        <a href="#">
          <img
            src="../assets/images/icon-twitter.svg"
            alt=""
            class="h-6 ficon"
          />
        </a>
      </div> -->
    </div>
  </footer>

  <!-- <div class="h-screen w-screen flex bg-slate-200">
  <div class="h-full flex-col w-1/3 grid grid-rows-3 items-center">
    <div class="w-full flex flex-col gap-1">
        <h1 class="m-auto font-semibold text-2xl">Welcome,</h1>
        <h1 class="m-auto font-bold text-2xl text-indigo-800">User</h1>
        <label for="name" class="font-semibold">Input Links</label>
        <input placeholder="Enter your name" type="text" name="name" id="name" v-model="App.input.links.rawlinks" 
          class="h-9 mt-1 border-slate-300 rounded w-full bg-gray-50 "/>
        <label for="name" class="font-semibold">Custom Input</label>
        <input placeholder="Enter your name" type="text" name="name" id="name" v-model="App.input.links.customlinks" 
          class="h-9 mt-1 border-slate-300 rounded w-full bg-gray-50 "/>
        <button @click="((App.addLinks(App.input.links)))" 
        class="py-2 w-full font-semibold rounded-md text-slate-50 bg-indigo-500 active:bg-indigo-600">
        Submit</button>
    </div>
    <Navbar />
  </div>
    <div class="w-full flex flex-col">
        <h1 class="m-auto font-semibold text-2xl">Welcome,</h1>
        <h1 class="m-auto font-bold text-2xl text-indigo-800">User</h1>
        <ul>
          <li v-for="link in App.links" :key="link.id">
              <p>{{link.rawlinks}}</p>
              <p>{{link.customlinks}}</p>
          </li>
        </ul>
    </div>
</div> -->
</template>

<script>
import { useApp } from "../stores/index";

export default {
  components: {},
  setup() {
    const App = useApp();
    return {
      App,
    };
  },
  mounted() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    const input = document.getElementById("link-input");
    const linkForm = document.getElementById("link-form");
    const errMsg = document.getElementById("err-msg");

    btn.addEventListener("click", navToggle);
    linkForm.addEventListener("submit", formSubmit);

    // Toggle Mobile Menu
    function navToggle() {
      btn.classList.toggle("open");
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }

    // Validate a URL
    function validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
          "((\\d{1,3}\\.){3}\\d{1,3}))" +
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
          "(\\?[;&a-z\\d%_.~+=-]*)?" +
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!pattern.test(str);
    }

    function formSubmit(e) {
      e.preventDefault();

      if (input.value === "") {
        errMsg.innerHTML = "Please enter something";
        input.classList.add("border-red");
      } else if (!validURL(input.value)) {
        errMsg.innerHTML = "Please enter a valid URL";
        input.classList.add("border-red");
      } else {
        errMsg.innerHTML = "";
        input.classList.remove("border-red");
        alert("Success");
      }
    }
    this.App.getlinks();
  },
};
</script>

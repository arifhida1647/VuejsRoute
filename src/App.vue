<template>
  <div :class="{ 'dark': isDarkMode }">
    <div class="bg-white dark:text-white dark:bg-slate-900">
      <nav class="bg-white dark:border-t-blue-700 border-t-4 border-orange-400 dark:bg-gray-900 fixed top-0 w-full z-10">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arif</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" @click="toggleNav"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="w-full md:block md:w-auto" :class="{ 'hidden': Nav }" id="navbar-default">
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <router-link to="/" class="block py-2 pl-3 pr-4 md:p-0 dark:text-white" aria-current="page"
                  :class="{ 'md:dark:text-blue-500 text-blue-500': $route.path === '/' }">
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/course" class="block py-2 pl-3 pr-4 md:p-0 dark:text-white" aria-current="page"
                  :class="{ 'md:dark:text-blue-500 text-blue-500': $route.path === '/course' }">
                  Course
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="block py-2 pl-3 pr-4 md:p-0 dark:text-white" aria-current="page"
                  :class="{ 'md:dark:text-blue-500 text-blue-500': $route.path === '/about' }">
                  About
                </router-link>
              </li>
              <li>
                <div class="py-5 md:py-0 pl-3 pr-4">
                  <label class="relative inline-flex items-center cursor-pointer ">
                    <input type="checkbox" value="" class="sr-only peer" @change="toggleTheme">
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="mt-28 fixed hidden md:block z-10">
        <!-- drawer init and show -->
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button" @click="activateSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <!-- drawer component -->
        <div id="drawer-navigation"
          class="fixed top-0 left-0 z-40 w-72 h-screen p-8 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
          tabindex="-1" aria-labelledby="drawer-navigation-label">
          <h5 id="drawer-navigation-label" class="text-2xl mb-5 font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu</h5>
          <button type="button" @click="closeSidebar" aria-controls="drawer-navigation"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close menu</span>
          </button>
          <div class="py-4 overflow-y-auto">
            <ul class="space-y-5 font-medium">
              <li>
                <router-link to="/" :class="{ 'md:dark:text-blue-500 md:text-blue-500': $route.path === '/' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span class="ml-6">Home</span>
                </router-link>
              </li>
              <li>
                <router-link to="/course" :class="{ 'md:dark:text-blue-500 md:text-blue-500': $route.path === '/course' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <span class="ml-6">Course</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about" :class="{ 'md:dark:text-blue-500 md:text-blue-500': $route.path === '/about' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span class="flex-1 ml-6 whitespace-nowrap">About</span>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <router-view class="bg-white dark:bg-slate-900" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: false,
      Nav: true
    };
  },
  methods: {
    activateSidebar() {
      // Get the sidebar element.
      const sidebar = document.querySelector('#drawer-navigation');

      // Show the sidebar by removing the CSS class.
      sidebar.classList.remove('-translate-x-full');
    },
    closeSidebar() {
      // Get the sidebar element.
      const sidebar = document.querySelector('#drawer-navigation');

      // Close the sidebar by adding the CSS class.
      sidebar.classList.add('-translate-x-full');
    },
    toggleTheme() {
      // Menggunakan this.isDarkMode untuk mengakses variabel data Vue.
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
    toggleNav() {
      // Menggunakan this.Nav untuk mengakses variabel data Vue.
      this.Nav = !this.Nav;

      // Mengatur kelas CSS pada elemen dengan ID 'navbar-default'
      const navbarDefault = document.querySelector('#navbar-default');
      if (this.Nav) {
        navbarDefault.classList.remove('hidden');
      } else {
        navbarDefault.classList.add('hidden');
      }
    },
  },
};
</script>
<style></style>

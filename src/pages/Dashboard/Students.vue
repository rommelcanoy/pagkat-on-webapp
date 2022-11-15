<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "Students",
  components: {
    Sidebar
  }
})

</script>

<template>
  <div class="h-screen flex bg-gray-100 text-gray-900 flex-1">
    <Sidebar />
    <div class="ml-64 flex-1 flex flex-col ">
      <nav class="flex p-5 border-b w-full fixed bg-white" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Students
            </a>
          </li>


          <!-- <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
            </div>
          </li> -->
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
          <div class="py-8">
            <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 class="text-2xl leading-tight">
                Students
              </h2>
              <div class="text-end">
                <form
                  class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div class=" relative ">
                    <input type="text" id="&quot;form-subscribe-Filter"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Search Name" />
                  </div>
                  <router-link to="/dashboard/add-student">
                    <button
                      class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                      type="submit">
                      Add Student
                    </button>
                  </router-link>
                </form>
              </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Name
                      </th>
                      <!-- <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Role
                      </th> -->
                      <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Age
                      </th>
                      <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Kinder Level
                      </th>
                      <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                              <img alt="profil" src="https://tailwindui.com/img/avatar-3.jpg"
                                class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </div>
                      </td>
                      <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Admin
                        </p>
                      </td> -->
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          8
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                          </span>
                          <span class="relative">
                            1
                          </span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                              <img alt="profil" src="https://tailwindui.com/img/avatar-3.jpg"
                                class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </div>
                      </td>
                      <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Admin
                        </p>
                      </td> -->
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          8
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                          </span>
                          <span class="relative">
                            1
                          </span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                              <img alt="profil" src="https://tailwindui.com/img/avatar-3.jpg"
                                class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </div>
                      </td>
                      <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Admin
                        </p>
                      </td> -->
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          8
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                          </span>
                          <span class="relative">
                            1
                          </span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>




                  </tbody>
                </table>
                <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                  <div class="flex items-center">
                    <button type="button"
                      class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                      <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                        </path>
                      </svg>
                    </button>
                    <button type="button"
                      class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                      1
                    </button>
                    <button type="button"
                      class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                      2
                    </button>
                    <button type="button"
                      class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                      3
                    </button>
                    <button type="button"
                      class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                      4
                    </button>
                    <button type="button"
                      class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                      <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "Dashboard",
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
              Dashboard
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
        <section class="p-6 my-6 dark:bg-gray-800 dark:text-gray-100 max-w-screen-xl">
          <div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-1 xl:grid-cols-3">

            <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z">
                  </path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon
                    points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292">
                  </polygon>
                  <polygon
                    points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708">
                  </polygon>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">200</p>
                <p class="capitalize">Students</p>
              </div>
            </div>
            <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z">
                  </path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon
                    points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292">
                  </polygon>
                  <polygon
                    points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708">
                  </polygon>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">12</p>
                <p class="capitalize">Teachers</p>
              </div>
            </div>
            <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z">
                  </path>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">4</p>
                <p class="capitalize">Activities</p>
              </div>
            </div>
          </div>
        </section>


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

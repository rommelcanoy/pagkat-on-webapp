<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "EditStudent",
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
            <router-link to="/dashboard/students"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Students
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Edit Student</a>
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">John Balansag</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="p-5">
          <h3 class="text-2xl text-gray-700">Edit Student</h3>

          <div class="">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <form>
                  <h2 class="text-lg font-semibold text-gray-700 capitalize">
                    Personal Information
                  </h2>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label class="text-gray-700" for="username">Student Picture</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="file" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Teacher</label>
                      <select id="countries"
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Teacher</option>
                        <option value="US">John Master</option>
                        <option value="CA">Balansag Boss</option>
                      </select>
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">First Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Middle Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Last Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Gender</label>
                      <select id="countries"
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Gender</option>
                        <option value="US">Male</option>
                        <option value="CA">Female</option>
                      </select>
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Birthplace</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>



                    <div>
                      <label class="text-gray-700" for="username">Address</label>
                      <textarea
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"></textarea>
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">CDC</label>
                      <select id="countries"
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select CDC</option>
                        <option value="US">test</option>
                        <option value="CA">test</option>
                      </select>
                    </div>
                  </div>

                  <h2 class="my-5 text-lg font-semibold text-gray-700 capitalize">
                    Family Information
                  </h2>

                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div>
                      <label class="text-gray-700" for="username">Father's Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Father's Occupation</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Father's Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username"></label>
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Mother's Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Mother's Occupation</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username">Mother's Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" />
                    </div>
                  </div>

                  <div class="flex justify-end mt-4">
                    <button
                      class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                      Save
                    </button>
                  </div>
                </form>


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

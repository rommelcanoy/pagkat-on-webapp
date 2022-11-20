<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "ManageAssessmentPage",
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
            <router-link to="/dashboard/assessments"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Assessments
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
              <router-link to=""
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Assessment
                for Learning Resource no. 5</router-link>
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Manage Assessment</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="p-5">
          <div class="justify-between flex">
            <h3 class="text-2xl text-gray-700 ">Manage Assessment</h3>
            <div class="">
              <button
                class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Save Assessment
              </button>
            </div>
          </div>

          <div class="">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <form>
                  <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
                    Assessment for Learning Resource no. 5
                  </h2>
                  <fieldset class="mt-4 border border-solid border-gray-300 p-3 bg-gray-50 rounded">
                    <legend class="text-lg font-medium">Activity 1 - tehee</legend>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      <!-- <div>
                        <label class="text-gray-700" for="username">Teacher</label>
                        <select id="countries"
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Select Teacher</option>
                          <option value="US">John Master</option>
                          <option value="CA">Balansag Boss</option>
                        </select>
                      </div> -->
                      <div>
                        <label class="text-gray-700" for="username">Activity Title</label>
                        <input
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" value="Activity 1 - tehee" />
                      </div>

                      <div>
                        <label class="text-gray-700" for="username">Instruction</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write instruction"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Materials</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write materials"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Procedure</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write procedure"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Objectives</label>
                        <div>
                          <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write objective"></textarea>
                          <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write objective"></textarea>
                        </div>
                        <div class="flex justify-end mt-4">
                          <button
                            class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                            Add Objective
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset class="mt-4 border border-solid border-gray-300 p-3 bg-gray-50 rounded">
                    <legend class="text-lg font-medium">Activity 2 - 321</legend>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      <!-- <div>
                        <label class="text-gray-700" for="username">Teacher</label>
                        <select id="countries"
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Select Teacher</option>
                          <option value="US">John Master</option>
                          <option value="CA">Balansag Boss</option>
                        </select>
                      </div> -->
                      <div>
                        <label class="text-gray-700" for="username">Activity Title</label>
                        <input
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" value="Activity 2 - 321" />
                      </div>

                      <div>
                        <label class="text-gray-700" for="username">Instruction</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write instruction"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Materials</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write materials"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Procedure</label>
                        <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write procedure"></textarea>
                      </div>
                      <div>
                        <label class="text-gray-700" for="username">Objectives</label>
                        <div>
                          <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write objective"></textarea>
                          <textarea
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          type="text" placeholder="Write objective"></textarea>
                        </div>
                        <div class="flex justify-end mt-4">
                          <button
                            class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                            Add Objective
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div class="flex justify-end mt-4">
                    <button
                      class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                      Add Activity
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

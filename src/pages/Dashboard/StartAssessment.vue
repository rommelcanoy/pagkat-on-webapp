<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import AssessmentForm from "../../components/AssessmentForm.vue";

export default defineComponent({
  name: "StartAssessment",
  components: {
    Sidebar,
  },
  setup() {

    return {
    }
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
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Assessment
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Start Assessment</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="p-5">
          <div class="justify-between flex">
            <h3 class="text-2xl text-gray-700 ">Assessment</h3>
            <!-- <div class="">
              <button
                class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Save Assessment
              </button>
            </div> -->
          </div>

          <div class="mt-4">
            <div class="p-6 bg-white rounded-md border">
              <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
                Assessment for Learning Resource no. 5
              </h2>

              <table class="mt-6 table-auto w-full border-collapse border border-gray-300">
                <div class="tableHead">
                  <tr>
                    <th rowspan="2" class="border border-gray-300  px-3 py-2">Assessment for Learning Resource no. 5
                    </th>
                    <th colspan="6" class="border border-gray-300  px-3 py-2">Domains</th>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 text-center  px-3 py-2">PH+</td>
                    <td class="border border-gray-300 text-center px-3 py-2">SE</td>
                    <td class="border border-gray-300 text-center px-3 py-2">CV</td>
                    <td class="border border-gray-300 text-center px-3 py-2">CD</td>
                    <td class="border border-gray-300 text-center px-3 py-2">LD</td>
                    <td class="border border-gray-300 text-center px-3 py-2">CA</td>
                  </tr>
                </div>
                <div class="activity">
                  <tr>
                    <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Activity 1: Bring Me</span>
                    </td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                  </tr>
                </div>
                <div class="objectives">
                  <tr>
                    <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Objectives:</span></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-3 py-2">1. objectve 1</td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="PH+" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="SE" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CV" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CD" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="LD" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CA" /></td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-3 py-2">1. objectve 2</td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="PH+" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="SE" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CV" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CD" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="LD" /></td>
                  <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                      value="CA" /></td>
                  </tr>
                </div>
                <div class="materials">
                  <tr>
                    <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Materials:</span>
                      hcucccuchcuchcuchcu</td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                  </tr>
                </div>
                <div class="procedure">
                  <tr>
                    <td class="border border-gray-300  px-3 py-2"><span class="font-semibold">Procedure:</span></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300  px-3 py-2">1. Practice procedure 1</td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="PH+" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="SE" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CV" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CD" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="LD" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CA" /></td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300  px-3 py-2">2. Practice procedure 2</td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="PH+" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="SE" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CV" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CD" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="LD" /></td>
                    <td class="border border-gray-300  px-3 py-2 text-center"><input name="practice1" type="radio"
                        value="CA" /></td>
                  </tr>
                </div>
              </table>
              <div class="flex justify-end mt-4">
                <button
                  class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                  <span>Submit Assessment</span>
                </button>
              </div>
              <!-- <form class="">
                <div class="mt-4 border border-solid border-gray-300 p-5 bg-gray-50 rounded">
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium">Title</h3>
                    <div class="flex gap-2 items-center">
                      <button type="button"
                        class="px-2 py-2 text-gray-500 bg-g-500 rounded-md bg-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none ">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </button>
                      <button type="button"
                        class="px-2 py-2 text-gray-500 bg-g-500 rounded-md bg-gray-300 hover:text-white hover:bg-red-700 focus:outline-none ">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                    <div>
                      <label class="text-gray-700" for="username">Activity Title</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" />
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
                  </div>
                </div>


              </form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

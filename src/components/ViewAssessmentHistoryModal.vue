<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "ViewAssessmentHistoryModal",
  components: {
  },
  setup() {
    const startAssess = ref(false);

    return {
      startAssess,
    }
  }
})
</script>

<template>
  <div id="ViewAssessmentHistoryModal" tabindex="-1" aria-hidden="true" v-if="startAssess"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
    style="">
    <div @click.prevent="startAssess = false" class="bg-gray-900 absolute opacity-50 right-0 top-0 left-0 bottom-0">
    </div>
    <div class="relative w-full max-w-screen-lg h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" @click.prevent="startAssess = false"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="ViewAssessmentHistoryModal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Assessment History</h3>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow border rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                      Name
                    </th>
                    <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                      Type
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
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Assessment 1
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                        </span>
                        <span class="relative">
                          Test
                        </span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex gap-5 items-center">
                        <router-link to="/dashboard/view-assessment" class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500">
                          View Assessment
                        </router-link>
                        <!-- <router-link to="/dashboard/start-assessment" class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500" @click="startAssess = true">Start Assessment</router-link> -->
                      </div>
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
  <button class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500"
    @click="startAssess = true">Assessment History</button>
</template>


  

<style scoped>

</style>

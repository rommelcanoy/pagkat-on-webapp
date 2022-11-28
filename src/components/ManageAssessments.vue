<script lang="ts">
import { defineComponent, ref } from "vue";
import {assessmentStore} from "../store";

export default defineComponent({
  name: "ManageAssessments",
  components: {
  },
  setup() {
    const active = ref(false);
    const activeAdd = ref(false);
    const assessment_store = assessmentStore()
    return {
      active,
      activeAdd,
      assessment_store
    }
  },
  async mounted (){
    await this.assessment_store.getAssessments()
  }
})

</script>

<template>

  <div class="overflow-auto">
    <div id="editAssessmentModal" tabindex="-1" aria-hidden="true" v-if="active"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
      style="">
      <div @click.prevent="active = false" class="bg-gray-900 absolute opacity-70 right-0 top-0 left-0 bottom-0">
      </div>
      <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" @click.prevent="active = false"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="editAssessmentModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Assessment</h3>
            <form class="space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assessment
                  Title</label>
                <input type="text" name="enrollment_code" id="enrollment_code"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Title" required>
              </div>
              <div class="flex gap-2">
                <button type="button" @click.prevent="active = false"
                  class="w-full text-red-500 ring-1 ring-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                <button type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
              </div>
              <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create
                  account</a>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="addAssessmentModal" tabindex="-1" aria-hidden="true" v-if="activeAdd"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
      style="">
      <div @click.prevent="active = false" class="bg-gray-900 absolute opacity-70 right-0 top-0 left-0 bottom-0">
      </div>
      <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" @click.prevent="activeAdd = false"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="addAssessmentModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Assessment</h3>
            <form class="space-y-6" action="javascript:void(0)" ref="assessment_form" @submit.prevent="this.assessment_store.addAssessment($event, this.$refs.assessment_form)">
              <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assessment
                  Title</label>
                <input type="text" name="title" id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Title" required>
              </div>
              <div class="flex gap-2">
                <button type="button" @click.prevent="activeAdd = false"
                  class="w-full text-red-500 ring-1 ring-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                <button type="submit" @click="this.$refs.assessment_form.submit()"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
              </div>
              <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create
                  account</a>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
      <div class="py-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl leading-tight">
            Assessments
          </h2>
          <div class="text-end">
            <form
              class="flex flex-col md:flex-row w-3/4 md:w-full max-w-md md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div class=" relative ">
                <input type="text" id=""
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Search Title" />
              </div>
              <router-link to="/dashboard/add-student">
                <button @click.prevent="activeAdd = true"
                  class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                  type="button">
                  Add Assessment
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
                    Assessment Title
                  </th>
                  <!-- <th scope="col"
                        class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        Role
                      </th> -->

                  <th scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="assessment in this.assessment_store.assessments" :key="assessment.id">
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{assessment.title}}
                        </p>
                      </div>
                    </div>
                  </td>
                  <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Admin
                        </p>
                      </td> -->
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-3">
                    <button class="text-green-600 hover:text-green-900" @click.prevent="active = true">
                      Edit
                    </button>
                    <router-link :to="'/dashboard/manage-assessment?assessment_id='+assessment.id"  class="text-indigo-600 hover:text-indigo-900">
                      Manage
                    </router-link>
                    <button class="text-red-600 hover:text-red-900">
                      Delete
                    </button>
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


</template>

<style scoped>

</style>

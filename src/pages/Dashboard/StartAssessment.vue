<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import AssessmentForm from "../../components/AssessmentForm.vue";
import {assessmentStore} from "../../store";

export default defineComponent({
  name: "StartAssessment",
  components: {
    Sidebar,
  },
  data(){
    return {
      assessment: []
    }
  },
  setup() {
    const assessment_store = assessmentStore()
    return {
      assessment_store
    }
  },
  async mounted(){
    let result = await this.assessment_store.retrieveAssessment(this.$route.query.assessment_id)
    // @ts-ignore
    Array.prototype.splice.apply(this.assessment, [0, result.length].concat(result))
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

              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"></path>
              </svg>
              Start Assessment
            </router-link>
          </li>
          <!-- <li>
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
          </li> -->
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{this.$route.query.assessment_name}}</span>
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
                {{this.$route.query.assessment_name}} {{}}
              </h2>
              <form action="javascript:void(0)" ref="start_assessment_form" @submit="this.assessment_store.submitAssessment(this.$route.query.assessment_id, this.$route.query.student_id, $event, this.$refs.start_assessment_form)">
              <table class="mt-6 table-auto w-full border-collapse border border-gray-300">
                <thead class="tableHead">
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
                </thead>
                <tbody class="data_container" v-for="item in this.assessment">
                  <!-- ACTIVITY -->
                    <tr>
                      <td class="border border-gray-300 px-3 py-2">
                        <span class="font-semibold">{{item.title}}</span>
                        <input :name="'activity_'+item.id" type="hidden" :value="item.id" />
                      </td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                    </tr>
                  <!-- ACTIVITY (END) -->
                  <!-- OBJECTIVES -->
                    <tr>
                      <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Objectives:</span></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>

                    </tr>
                    <tr v-for="objective in item.objectives">
                      <td class="border border-gray-300 px-3 py-2">
                        {{objective.name}}
                      </td>

                      <td class="border border-gray-300  px-3 py-2 text-center" v-for="rate in objective.domains">
                        <input :name="'objective_'+objective.id" type="radio" :value="rate.id" />
                      </td>
                    </tr>

                  <!-- OBJECTIVES (END) -->
                  <!-- MATERIALS -->
                    <tr>
                      <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Materials:</span>
                        {{item.materials}}</td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                    </tr>
                  <!-- MATERIALS (END) -->
                  <!-- PROCEDURES -->
                    <tr>
                      <td class="border border-gray-300  px-3 py-2"><span class="font-semibold">Procedure:</span></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                    </tr>
                    <tr >
                      <td class="border border-gray-300  px-3 py-2">{{ item.procedure }}</td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                      <td class="border border-gray-300 px-3 py-2"></td>
                    </tr>

                  <tr>
                    <td class="border border-gray-300  px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                    <td class="border border-gray-300 px-3 py-2"></td>
                  </tr>
                  <!-- PROCEDURES (END) -->
                </tbody>
              </table>
                <div class="flex justify-end mt-4">
                  <button @click="this.$refs.start_assessment_form.submit()"
                          class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    <span>Submit Assessment</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

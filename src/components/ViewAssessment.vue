<script lang="ts">
import { defineComponent, ref } from "vue";
import {assessmentStore, studentDashboard} from "../store";

export default defineComponent({
  name: "ViewAssessment",
  components: {
  },
  data(){
    return {
      assessment: []
    }
  },
  setup() {
    const student_store = studentDashboard()
    return {
      student_store
    }
  },
  async mounted(){
    const result = await this.student_store.getAssessmentHistoryResults(this.$route.query.assessment_id)

    console.log(result)
    // @ts-ignore
    Array.prototype.splice.apply(this.assessment, [0, result.length].concat(result))
  }
})

</script>

<template>
  <div class="p-6 bg-white rounded-md border">
    <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
      {{ this.$route.query.assessment_name }}
    </h2>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
          <tr>
            <th scope="col"
                class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Question
            </th>
            <th scope="col"
                class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Correct
            </th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="assessment in this.assessment">
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ assessment.description }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight" v-if="assessment.remarks === 'Correct'">
                  <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                  </span>
                  <span class="relative">
                    {{ assessment.remarks }}
                  </span>
                </span>
              <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight" v-if="assessment.remarks !== 'Correct'">
                  <span aria-hidden="true" class="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                  </span>
                  <span class="relative">
                    {{ assessment.remarks }}
                  </span>
                </span>
            </td>

          </tr>
          </tbody>
        </table>

      </div>
    </div>
<!--    <table class="mt-6 table-auto w-full border-collapse border border-gray-300">-->
<!--      <thead class="tableHead">-->
<!--        <tr>-->
<!--          <th rowspan="2" class="border border-gray-300  px-3 py-2">{{ this.$route.query.assessment_name }}-->
<!--          </th>-->
<!--          <th colspan="6" class="border border-gray-300  px-3 py-2">Domains</th>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td class="border border-gray-300 text-center  px-3 py-2">PH+</td>-->
<!--          <td class="border border-gray-300 text-center px-3 py-2">SE</td>-->
<!--          <td class="border border-gray-300 text-center px-3 py-2">CV</td>-->
<!--          <td class="border border-gray-300 text-center px-3 py-2">CD</td>-->
<!--          <td class="border border-gray-300 text-center px-3 py-2">LD</td>-->
<!--          <td class="border border-gray-300 text-center px-3 py-2">CA</td>-->
<!--        </tr>-->
<!--      </thead>-->

<!--      <tbody class="data_container" v-for="item in this.assessment">-->

<!--      &lt;!&ndash; ACTIVITY &ndash;&gt;-->
<!--      <tr>-->
<!--        <td class="border border-gray-300 px-3 py-2">-->
<!--          <span class="font-semibold">{{item.title}}</span>-->
<!--          <input :name="'activity_'+item.id" type="hidden" :value="item.id" />-->
<!--        </td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--      </tr>-->
<!--      &lt;!&ndash; ACTIVITY (END) &ndash;&gt;-->

<!--      &lt;!&ndash; OBJECTIVES &ndash;&gt;-->
<!--      <tr>-->
<!--        <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Objectives:</span></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->

<!--      </tr>-->
<!--      <tr v-for="objective in item.objectives">-->
<!--        <td class="border border-gray-300 px-3 py-2">-->
<!--          {{objective.name}}-->
<!--        </td>-->
<!--        <td class="border border-gray-300  px-3 py-2 text-center"  v-for="rate in objective.domains">-->

<!--          <div v-if="objective.result === rate.id">-->
<!--            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd"-->
<!--                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"-->
<!--                    clip-rule="evenodd"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </td>-->

<!--&lt;!&ndash;        <td class="border border-gray-300  px-3 py-2 text-center flex justify-center text-green-500" >&ndash;&gt;-->

<!--&lt;!&ndash;        </td>&ndash;&gt;-->
<!--      </tr>-->

<!--      &lt;!&ndash; OBJECTIVES (END) &ndash;&gt;-->

<!--      <tr>-->
<!--        <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Materials:</span>-->
<!--          {{item.materials}}</td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--      </tr>-->

<!--      <tr>-->
<!--        <td class="border border-gray-300  px-3 py-2"><span class="font-semibold">Procedure:</span></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--      </tr>-->
<!--      <tr >-->
<!--        <td class="border border-gray-300  px-3 py-2">{{ item.procedure }}</td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--      </tr>-->

<!--      <tr>-->
<!--        <td class="border border-gray-300  px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--        <td class="border border-gray-300 px-3 py-2"></td>-->
<!--      </tr>-->
<!--      </tbody>-->

<!--    </table>-->
    <!-- <div class="flex justify-end mt-4">
      <button
        class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        <span>Submit Assessment</span>
      </button>
    </div> -->
  </div>
</template>

<style scoped>

</style>

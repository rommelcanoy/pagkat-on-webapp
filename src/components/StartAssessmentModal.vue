<script lang="ts">
import { defineComponent, ref } from 'vue';
import {assessmentStore} from "../store";

export default defineComponent({
  props: ['student_id'],
  name: "StartAssessmentModal",
  components: {
  },
  data(){
  return {
      current_assessment_selected: {id: null, title: null},
    }
  },
  setup() {
    const startAssess = ref(false);
    const assessment_store = assessmentStore()
    return {
      startAssess,
      assessment_store
    }
  },
  async mounted(){
    await this.assessment_store.getAssessments()
  }
})
</script>

<template>
  <div id="startAssessmentModal" tabindex="-1" aria-hidden="true" v-if="startAssess"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
    style="">
    <div @click.prevent="startAssess = false" class="bg-gray-900 absolute opacity-50 right-0 top-0 left-0 bottom-0">
    </div>
    <div class="relative w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" @click.prevent="startAssess = false"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="startAssessmentModal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Select assessment</h3>

          <form class="space-y-6" action="javascript:void(0)">
              <!-- <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                option</label> -->

            <select id="countries"
                    v-model="this.current_assessment_selected"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option :value="{id: null, title: null}">Select Assessment</option>
              <option :value="assessment"  v-for="assessment in this.assessment_store.assessments" :key="assessment.id">{{assessment.title}}</option>
            </select>

            <br>
            <router-link :to="this.current_assessment_selected.id == null ? '' : '/dashboard/start-assessment?assessment_id='+this.current_assessment_selected.id+'&assessment_name='+this.current_assessment_selected.title+'&student_id='+this.student_id"  class="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
  <button class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500"
    @click="startAssess = true">Start Assessment</button>
</template>


  

<style scoped>

</style>

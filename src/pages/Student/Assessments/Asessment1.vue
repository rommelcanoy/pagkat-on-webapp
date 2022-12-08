<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../../components/Sidebar.vue";
import {studentDashboard} from "../../../store";

export default defineComponent({
  name: "Assessment_1",
  components: {
    Sidebar
  },
  setup(){
    const url = import.meta.env.VITE_BACKEND_HOST
    const student_store = studentDashboard()
    return {url, student_store}
  }, mounted() {
    if(this.student_store.student_info.id == null){
      this.$router.push({'name': 'LandingPage'})
    }
  }
})

</script>

<template>
  <div class="absolute right-0 top-0 left-0 bottom-0">
    <button type="button" @click="$router.go(-1)"
      class="left-10 top-10 absolute py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</button>

    <iframe ref="frame" src="../../../../assessments/game.html" class="z-10" height="100%" width="100%" @load="this.$refs.frame.contentWindow.postMessage({'host': url, 'student': student_store.student_info.id}, '*')"
      title="Assessment 1">


    </iframe>
  </div>

</template>

<style scoped>

</style>

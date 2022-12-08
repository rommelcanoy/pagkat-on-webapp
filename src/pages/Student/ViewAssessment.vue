<script lang="ts">
import { ref, defineComponent } from 'vue'
import StudentNav from '../../components/StudentNav.vue'
import ViewAssessment from '../../components/ViewAssessment.vue'

export default defineComponent({
  name: "StudentViewAssessment",
  components: {
    StudentNav,
    ViewAssessment,
  }
})
</script>


<template>

  <div class="h-screen flex flex-col overflow-hidden">
    <student-nav />
    <div class="flex-1 bg-gray-50 h-full py-8 px-12 flex flex-col items-center gap-12 overflow-y-auto">
      <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
        <div class="py-8 flex flex-col gap-4">
          <div class="flex items-center sm:mb-0 justify-between w-full">
            <h2 class="text-2xl leading-tight">
              Assessment
            </h2>

            <div class="text-end">
              <button type="button" @click="$router.go(-1)"
                class="py-2 px-3 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</button>
            </div>
          </div>
          <view-assessment />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>

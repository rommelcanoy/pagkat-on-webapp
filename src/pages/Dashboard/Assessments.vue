<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import ManageAssessments from "../../components/ManageAssessments.vue";

export default defineComponent({
  name: "Assessments",
  components: {
    Sidebar,
    ManageAssessments,
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
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                </path>
              </svg>
              Assessments
            </a>
          </li>
        </ol>
      </nav>
      <div class="mt-[64px]">
        <manage-assessments />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

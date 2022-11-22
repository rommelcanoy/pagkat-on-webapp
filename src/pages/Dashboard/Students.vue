<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import ManageStudents from "../../components/ManageStudents.vue";

export default defineComponent({
  name: "Students",
  components: {
    Sidebar,
    ManageStudents
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
              <svg aria-hidden="true"
              class="w-4 h-4 mr-2"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>
              Students
            </a>
          </li>
        </ol>
      </nav>
      <div class="mt-[64px]">
        <manage-students />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

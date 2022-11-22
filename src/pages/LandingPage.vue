<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: "LandingPage",
  components: {
  }
})
</script>


<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        PAGKAT-ON
      </a>
      <div class="inline-flex rounded-md shadow-sm">
        <router-link to="/login" aria-current="page"
          class="py-2 px-4 text-xl font-medium text-gray-900 bg-white rounded-l-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Teacher
        </router-link>
        <router-link to="/student/login"
          class="py-2 px-4 text-xl font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Student
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

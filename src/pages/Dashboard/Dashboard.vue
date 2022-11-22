<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import ManageStudents from "../../components/ManageStudents.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Sidebar,
    ManageStudents
  }
})

</script>

<template>
  <div class="h-screen flex bg-gray-100 text-gray-900 flex-1">
    <Sidebar />
    <div class="ml-64 flex-1 flex flex-col">
      <nav class="flex p-5 border-b w-full fixed bg-white" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Dashboard
            </a>
          </li>


          <!-- <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
            </div>
          </li> -->
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px]">
        <section class="p-6 my-6 dark:bg-gray-800 dark:text-gray-100 max-w-screen-xl mx-auto">
          <div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-1 xl:grid-cols-2 ">

            <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z">
                  </path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon
                    points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292">
                  </polygon>
                  <polygon
                    points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708">
                  </polygon>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">200</p>
                <p class="capitalize">Students</p>
              </div>
            </div>
            <!-- <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z">
                  </path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon
                    points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292">
                  </polygon>
                  <polygon
                    points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708">
                  </polygon>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">12</p>
                <p class="capitalize">Teachers</p>
              </div>
            </div> -->
            <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white border">
              <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="h-9 w-9 dark:text-gray-800">
                  <path
                    d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z">
                  </path>
                </svg>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p class="text-3xl font-semibold leading-none">4</p>
                <p class="capitalize">Assessments</p>
              </div>
            </div>
          </div>
        </section>

        <manage-students />
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>

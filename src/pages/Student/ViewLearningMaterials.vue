<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import ManageAssessments from "../../components/ManageAssessments.vue";
import { learningMaterialsStore } from "../../store";
import fileDownload from 'js-file-download'
import axios from "axios";
import StudentNav from '../../components/StudentNav.vue'

export default defineComponent({
  name: "ViewLearningMaterials",
  components: {
    Sidebar,
    ManageAssessments,
    StudentNav,
  },
  setup() {
    const active = ref(false);
    const learning_store = learningMaterialsStore()
    return {
      active, learning_store
    }
  },
  async mounted() {
    await this.learning_store.retrieve()
  },
  methods: {
    download: function (url: any, file_name: any) {

      axios.get(url, {
        responseType: 'blob',
      }).then(res => {
        fileDownload(res.data, file_name);
      });
      // let downloading = browser.downloads.download({
      //   url : downloadUrl,
      //   filename : 'my-image-again.png',
      //   conflictAction : 'uniquify'
      // });
    }
  }
})

</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <student-nav />
    <div class="flex-1 bg-gray-50 h-full py-8 px-12 flex flex-col items-center gap-12 overflow-y-auto">
      <iframe id="my_iframe" style="display:none;"></iframe>
      <!-- diri -->
      <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
        <div class="py-8">
          <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 class="text-2xl leading-tight">
              Files
            </h2>
            <div class="text-end">
            </div>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                      File name
                    </th>
                    <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="material in this.learning_store.materials" :key="material.id">
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ material.file_name }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex gap-5 items-center">

                        <a @click="this.download(material.uploaded_file, material.file_name)" href="javascript:void(0)"
                          download
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Download

                          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <!-- <router-link to="/dashboard/start-assessment" class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500" @click="startAssess = true">Start Assessment</router-link> -->
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

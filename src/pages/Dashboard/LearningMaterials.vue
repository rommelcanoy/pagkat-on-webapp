<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import ManageAssessments from "../../components/ManageAssessments.vue";
import {learningMaterialsStore} from "../../store";
import fileDownload from 'js-file-download'
import axios from "axios";

export default defineComponent({
  name: "LearningMaterials",
  components: {
    Sidebar,
    ManageAssessments,
  },
  setup() {
    const active = ref(false);
    const learning_store = learningMaterialsStore()
    return {
      active, learning_store
    }
  },
  async mounted(){
    await this.learning_store.retrieve()
  },
  methods: {
    download: function (url: any, file_name: any){

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
  <div class="h-screen flex bg-gray-100 text-gray-900 flex-1">
    <Sidebar />
    <div class="ml-64 flex-1 flex flex-col ">
      <div id="uploadModal" tabindex="-1" aria-hidden="true" v-if="active"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
        style="">
        <div @click.prevent="active = false" class="bg-gray-900 absolute opacity-70 right-0 top-0 left-0 bottom-0">
        </div>
        <div class="relative w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" @click.prevent="active = false"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="uploadModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Upload File</h3>
              <form class="space-y-6" action="javascript:void(0)" ref="learning_form" @submit="this.learning_store.upload($event, this.$refs.learning_form); active = false">

                <div class="flex items-center justify-center w-full">
                  <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                        </path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                          upload</span></p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                    </div>
                    <input id="dropzone-file" required name="uploaded_file" type="file" class="hidden"  />
                  </label>
                </div>

                <div class="flex gap-2">
                  <button type="button" @click.prevent="active = false"
                    class="w-full text-red-500 ring-1 ring-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                  <button type="submit" @click="this.$refs.learning_form.submit()"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
                </div>
                <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create
                  account</a>
              </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe id="my_iframe" style="display:none;"></iframe>

      <nav class="flex p-5 border-b w-full fixed bg-white" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
              class="w-4 h-4 mr-2"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z">
              </path>
            </svg>
              Learning Materials
            </a>
          </li>
        </ol>
      </nav>
      <div class="mt-[64px]">
        <!-- diri -->
        <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
          <div class="py-8">
            <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 class="text-2xl leading-tight">
                Files
              </h2>
              <div class="text-end">
                <form
                  class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div class=" relative ">
<!--                    <input type="text" id=""-->
<!--                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"-->
<!--                      placeholder="Search" />-->
                  </div>
                  <button @click.prevent="active = true"
                    class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                    type="submit">
                    Upload
                  </button>
                </form>
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
                              {{material.file_name}}
                            </p>
                          </div>
                        </div>
                      </td>
                      <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Admin
                            </p>
                          </td> -->
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex gap-5 items-center">

                          <a
                              @click="this.download(material.uploaded_file, material.file_name)" href="javascript:void(0)"
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
<!--                <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">-->
<!--                  <div class="flex items-center">-->
<!--                    <button type="button"-->
<!--                      class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">-->
<!--                      <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"-->
<!--                        xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path-->
<!--                          d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                    </button>-->
<!--                    <button type="button"-->
<!--                      class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">-->
<!--                      1-->
<!--                    </button>-->
<!--                    <button type="button"-->
<!--                      class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                      2-->
<!--                    </button>-->
<!--                    <button type="button"-->
<!--                      class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                      3-->
<!--                    </button>-->
<!--                    <button type="button"-->
<!--                      class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                      4-->
<!--                    </button>-->
<!--                    <button type="button"-->
<!--                      class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">-->
<!--                      <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"-->
<!--                        xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path-->
<!--                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

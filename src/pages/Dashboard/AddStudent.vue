<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'
import {studentStore, systemParams} from "../../store";

export default defineComponent({
  name: "AddStudent",
  components: {
    Sidebar
  },
  setup(){
    const params = systemParams()
    const student_store = studentStore()
    return {
      params, student_store
    }
  },
  async mounted(){
    await this.params.get_centers()
    await this.params.get_teachers()
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
            <router-link to="/dashboard/students"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Students
            </router-link>
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
          </li> -->
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Add Student</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="p-5">
          <h3 class="text-2xl text-gray-700">Add Student</h3>

          <div class="">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <form action="javascript:void(0)" ref="add_student_form" @submit.prevent="this.student_store.addStudent($event, this.$refs.add_student_form, this.$route.query.enrollment_code)">
                  <h2 class="text-lg text-center font-semibold text-gray-700 capitalize">
                    Personal Information
                  </h2>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label class="text-gray-700" for="student_image">Student Picture</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="file" name="student_image" id="student_image"  required/>
                    </div>

                    <div>
                      <label class="text-gray-700" for="teacher">Teacher</label>
                      <select id="teacher" name="teacher" required
                        class="w-full mt-2 border-gray-200 rounded-md
                        focus:border-indigo-600 focus:ring focus:ring-opacity-40
                        focus:ring-indigo-500 selection:bg-gray-50 border
                        text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                        <option v-for="item in this.params.teachers" :value="item.id">{{item.first_name}} {{item.last_name}}</option>
                      </select>
                    </div>
                    <div>
                      <label class="text-gray-700" for="first_name">First Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="first_name" name="first_name" required />
                    </div>
                    <div>
                      <label class="text-gray-700" for="middle_name">Middle Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="middle_name" name="middle_name" required />
                    </div>
                    <div>
                      <label class="text-gray-700" for="last_name">Last Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"  id="last_name" name="last_name" required />
                    </div>
                    <div>
                      <label class="text-gray-700" for="gender">Gender</label>
                      <select id="gender"  name="gender" required
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label class="text-gray-700" for="birth_date" >Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" id="birth_date"  required name="birth_date" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="birth_place">Birthplace</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="birth_place" required  name="birth_place" />
                    </div>



                    <div>
                      <label class="text-gray-700" for="address">Address</label>
                      <textarea
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="address"  required name="address"></textarea>
                    </div>

                    <div>
                      <label class="text-gray-700" for="development_center">Child Development Center</label>
                      <select id="development_center" required  name="development_center"

                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="item in this.params.centers" :value="item.id" >{{item.name}}</option>
                      </select>
                    </div>
                  </div>

                  <h1 class="my-5 mt-5 text-lg text-center font-semibold text-gray-700 capitalize">
                    Family Information
                  </h1>

                  <div class="grid mt-5 grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div>
                      <label class="text-gray-700" for="father_name">Father's Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="father_name"  name="father_name" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="father_occupation">Father's Occupation</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="father_occupation"  name="father_occupation" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="father_birth_date">Father's Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" id="father_birth_date"  name="father_birth_date" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="username"></label>
                    </div>

                    <div>
                      <label class="text-gray-700" for="mother_name">Mother's Name</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="mother_name"  name="mother_name" />
                    </div>
                    <div>
                      <label class="text-gray-700" for="mother_occupation">Mother's Occupation</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" id="mother_occupation"  name="mother_occupation" />
                    </div>

                    <div>
                      <label class="text-gray-700" for="mother_birth_date">Mother's Birthdate</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="date" id="mother_birth_date"  name="mother_birth_date" />
                    </div>
                  </div>

                  <div class="flex justify-end mt-4">
                    <button @click="this.$refs.add_student_form.submit()"
                      class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                      Save
                    </button>
                  </div>
                </form>


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

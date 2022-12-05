<script lang="ts">
import { ref, defineComponent } from 'vue'
import StudentNav from '../../components/StudentNav.vue'
import {studentDashboard} from "../../store";

export default defineComponent({
  name: "StudentDashboard",
  components: {
    StudentNav,
  },
  data(){
    return{
      history: []
    }
  },
  setup(){
    const student_store = studentDashboard()

    return {student_store}
  },

  async mounted(){
    // @ts-ignore
    const history = await this.student_store.getAssessmentHistory(this.student_store.student_info.id)

    // @ts-ignore
    Array.prototype.splice.apply(this.history, [0, history.length].concat(history))
  }
})
</script>


<template>

  <div class="h-screen flex flex-col overflow-hidden">
    <student-nav />
    <div class="flex-1 bg-gray-50 h-full py-8 px-12 flex flex-col items-center gap-12 overflow-y-auto">
      <div class="rounded-xl p-12 shadow sm:px-8 w-full max-w-screen-lg bg-white">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div class="grid-cols-1 lg:col-span-3">
            <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
              <img :src="this.student_store.student_info.student_image == null ? 'https://www.w3schools.com/howto/img_avatar.png' : this.student_store.student_info.student_image" id="logo-39" width="50" height="40" />
            </div>
          </div>

          <div class="col-span-1 lg:col-span-9">
            <div class="text-center lg:text-left">
              <h2 class="text-2xl font-bold text-zinc-700">{{this.student_store.student_info.first_name}} {{this.student_store.student_info.last_name}}</h2>
              <p class="mt-2 font-semibold text-zinc-700 mb-4">Student</p>
              <router-link to="/student/details" class="text-blue-500 hover:text-blue-700">View more Info</router-link>
            </div>

            <!-- <div class="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p class="font-bold text-zinc-700">345</p>
                <p class="text-sm font-semibold text-zinc-700">Posts</p>
              </div>
  
              <div>
                <p class="font-bold text-zinc-700">200k</p>
                <p class="text-sm font-semibold text-zinc-700">Followers</p>
              </div>
  
              <div>
                <p class="font-bold text-zinc-700">38</p>
                <p class="text-sm font-semibold text-zinc-700">Following</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 sm:px-8 w-full max-w-screen-xl">
        <div class="py-8">
          <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 class="text-2xl leading-tight">
              Assessment History
            </h2>
            <div class="text-end">
              <form
                class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div class=" relative ">
                  <input type="text" id=""
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Search" />
                </div>
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
                    Name
                  </th>
                  <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Type
                  </th>
                  <th scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="assessment in this.history">
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ assessment.assessment }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                        </span>
                        <span class="relative">
                          Assessment
                        </span>
                      </span>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex gap-5 items-center">
                      <router-link :to="'/student/view-assessment?assessment_id='+assessment.assessment_id+'&result_id='+assessment.id+'&assessment_name='+assessment.assessment" class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500">
                        View Assessment
                      </router-link>
                      <!-- <router-link to="/dashboard/start-assessment" class="hover:bg-blue-500 hover:text-white border-blue-500 px-3 py-1 border  rounded text-blue-500" @click="startAssess = true">Start Assessment</router-link> -->
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
<!--              <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">-->
<!--                <div class="flex items-center">-->
<!--                  <button type="button"-->
<!--                    class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">-->
<!--                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"-->
<!--                      xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path-->
<!--                        d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">-->
<!--                      </path>-->
<!--                    </svg>-->
<!--                  </button>-->
<!--                  <button type="button"-->
<!--                    class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">-->
<!--                    1-->
<!--                  </button>-->
<!--                  <button type="button"-->
<!--                    class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                    2-->
<!--                  </button>-->
<!--                  <button type="button"-->
<!--                    class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                    3-->
<!--                  </button>-->
<!--                  <button type="button"-->
<!--                    class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">-->
<!--                    4-->
<!--                  </button>-->
<!--                  <button type="button"-->
<!--                    class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">-->
<!--                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"-->
<!--                      xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path-->
<!--                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">-->
<!--                      </path>-->
<!--                    </svg>-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>

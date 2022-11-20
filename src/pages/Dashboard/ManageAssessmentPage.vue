<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import AssessmentForm from "../../components/AssessmentForm.vue";

export default defineComponent({
  name: "ManageAssessmentPage",
  components: {
    Sidebar,
    AssessmentForm
  },
  setup() {
    const activities = reactive(
      [
        {
          title: 'activity 1',
          instructions: 'instruction test',
          materials: 'materials test1, test 11111',
          procedures: 'procdure 1, procedure 11111',
          objectives: [
            {
              name: ' test objective 1',
            }
          ]
        },
        {
          title: 'activity 2',
          instructions: 'instruction test 22222',
          materials: 'materials test1, test 2222',
          procedures: 'procdure 1, procedure 2222',
          objectives: [
            {
              name: ' test objective in activity 2',
            },
            {
              name: ' test 2 objective in activity 2',
            }
          ]
        }
      ]
    );

    const addActivity = () => {
      const data = {
        title: 'activity new',
        instructions: '',
        materials: '',
        procedures: '',
        objectives: [
          {
            id: 1,
            name: '',
          },
          {
            id: 1,
            name: '',
          }
        ]
      }
      activities.push(data);
    }

    const deleteActivity = (index: number) => {
      console.log('index', index);
      activities.splice(index, 1);
    }

    const addObjective = (activityIndex: number) => {
      const data = {
        name: 'new objective',
      }
      activities[activityIndex].objectives.push(data);
    }

    const removeObjective = (activityIndex: number, objectiveIndex: number) => {
      activities[activityIndex].objectives.splice(objectiveIndex, 1);
    }

    return {
      activities,
      addActivity,
      deleteActivity,
      addObjective,
      removeObjective,
    }
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
            <router-link to="/dashboard/assessments"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              Assessments
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <router-link to=""
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Assessment
                for Learning Resource no. 5</router-link>
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Manage Assessment</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="overflow-auto mt-[64px] ">
        <div class="p-5">
          <div class="justify-between flex">
            <h3 class="text-2xl text-gray-700 ">Manage Assessment</h3>
            <div class="">
              <button
                class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Save Assessment
              </button>
            </div>
          </div>

          <div class="mt-4">
            <div class="p-6 bg-white rounded-md border">
              <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
                Assessment for Learning Resource no. 5
              </h2>

              <div v-if="activities.length <= 0" class="">
                <h3 class="mt-3 text-lg">
                  No Activity, please add
                </h3>
              </div>

              <div v-else v-for="(activity, index) in activities" :key="activity.title">
                <assessment-form :activity="activity" :index="index" @deleteActivity="deleteActivity"
                  @addObjective="addObjective" @removeObjective="removeObjective" />
              </div>
              <div class="flex justify-end mt-4">
                <button @click="addActivity"
                  class="flex items-center px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                  <span>Add Activity</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"></path>
                  </svg>

                </button>
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

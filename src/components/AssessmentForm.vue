<script lang="ts">
import { defineComponent, ref } from "vue";
import ObjectiveInput from "./ObjectiveInput.vue";
import Activity from "../types/Activity";

export default defineComponent({
  name: "AssessmentForm",
  components: {
    ObjectiveInput,
  },
  props: {
    title: String,
    activity: Object as () => Activity,
    index: Number,
  },
  setup(props, context) {
    const active = ref(false);
    const activeAdd = ref(false);
    const collapse = ref(true);
    console.log('index', props.index);

    const deleteActivity = () => {
      console.log('props index', props.index);
      context.emit('deleteActivity', props.index);
    }

    const addObjective = () => {
      context.emit('addObjective', props.index);
    }

    const removeObjective = (objectiveIndex: number) => {
      // props.index ang value kay = activityIndex
      context.emit('removeObjective', props.index, objectiveIndex);
    }

    return {
      active,
      activeAdd,
      collapse,
      deleteActivity,
      addObjective,
      removeObjective,
    }
  }
})

</script>

<template>
  <form class="">
    <div class="mt-4 border border-solid border-gray-300 p-5 bg-gray-50 rounded">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-medium">{{ activity.title }}</h3>
        <div class="flex gap-2 items-center">
          <button type="button" @click="collapse = !collapse"
            class="px-2 py-2 text-gray-500 bg-g-500 rounded-md bg-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none ">
            <svg v-show="collapse" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <svg v-show="!collapse" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <button type="button" @click="deleteActivity"
            class="px-2 py-2 text-gray-500 bg-g-500 rounded-md bg-gray-300 hover:text-white hover:bg-red-700 focus:outline-none ">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1" v-show="collapse">
        <!-- <div>
            <label class="text-gray-700" for="username">Teacher</label>
            <select id="countries"
              class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 selection:bg-gray-50 border  text-gray-900 text-sm  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Teacher</option>
              <option value="US">John Master</option>
              <option value="CA">Balansag Boss</option>
            </select>
          </div> -->
        <div>
          <label class="text-gray-700" for="username">Activity Title</label>
          <input
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" v-model="activity.title" />
        </div>

        <div>
          <label class="text-gray-700" for="username">Instruction</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" v-model="activity.instructions" placeholder="Write instruction"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Materials</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" v-model="activity.materials" placeholder="Write materials"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Procedure</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" v-model="activity.procedure" placeholder="Write procedure"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Objectives</label>
          <div v-if="activity.objectives.length <= 0" class="">
            <h3 class="mt-3 text-md text-gray-600">
              No objectives, please add
            </h3>
          </div>
          <div v-else v-for="(objective, index) in activity.objectives" :key="index">
            <objective-input :objective="objective" :index="index" @removeObjective="removeObjective" />
          </div>
          <div class="flex justify-end mt-4">
            <button type="button" @click="addObjective"
              class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Add Objective
            </button>
          </div>
        </div>
      </div>
    </div>


  </form>
</template>

<style scoped>

</style>

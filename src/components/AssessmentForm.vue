<script lang="ts">
import { defineComponent, ref } from "vue";
import ObjectiveInput from "./ObjectiveInput.vue";

export default defineComponent({
  name: "AssessmentForm",
  components: {
    ObjectiveInput,
  },
  setup() {
    const active = ref(false);
    const activeAdd = ref(false);

    return {
      active,
      activeAdd,
    }
  }
})

</script>

<template>
  <form class="">
    <fieldset class="mt-4 border border-solid border-gray-300 p-3 bg-gray-50 rounded">
      <legend class="text-lg font-medium">Activity 1 - tehee</legend>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
            type="text" value="Activity 1 - tehee" />
        </div>

        <div>
          <label class="text-gray-700" for="username">Instruction</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" placeholder="Write instruction"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Materials</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" placeholder="Write materials"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Procedure</label>
          <textarea
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text" placeholder="Write procedure"></textarea>
        </div>
        <div>
          <label class="text-gray-700" for="username">Objectives</label>
          <div v-for="n in 4" :key="n">
            <objective-input />
          </div>
          <div class="flex justify-end mt-4">
            <button
              class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Add Objective
            </button>
          </div>
        </div>
      </div>
    </fieldset>

    <div class="flex justify-end mt-4">
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        Add Activity
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>

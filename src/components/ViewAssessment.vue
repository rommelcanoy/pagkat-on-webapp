<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ViewAssessment",
  components: {
  },
  setup() {
    return {
    }
  }
})

</script>

<template>
  <div class="p-6 bg-white rounded-md border">
    <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
      Assessment for Learning Resource no. 5
    </h2>

    <table class="mt-6 table-auto w-full border-collapse border border-gray-300">
      <div class="tableHead">
        <tr>
          <th rowspan="2" class="border border-gray-300  px-3 py-2">Assessment for Learning Resource no. 5
          </th>
          <th colspan="6" class="border border-gray-300  px-3 py-2">Domains</th>
        </tr>
        <tr>
          <td class="border border-gray-300 text-center  px-3 py-2">PH+</td>
          <td class="border border-gray-300 text-center px-3 py-2">SE</td>
          <td class="border border-gray-300 text-center px-3 py-2">CV</td>
          <td class="border border-gray-300 text-center px-3 py-2">CD</td>
          <td class="border border-gray-300 text-center px-3 py-2">LD</td>
          <td class="border border-gray-300 text-center px-3 py-2">CA</td>
        </tr>
      </div>
      <div class="activity">
        <tr>
          <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Activity 1: Bring Me</span>
          </td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
      </div>
      <div class="objectives">
        <tr>
          <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Objectives:</span></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">1. objectve 1</td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">1. objectve 2</td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
      </div>
      <div class="materials">
        <tr>
          <td class="border border-gray-300 px-3 py-2"><span class="font-semibold">Materials:</span>
            hcucccuchcuchcuchcu</td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
      </div>
      <div class="procedure">
        <tr>
          <td class="border border-gray-300  px-3 py-2"><span class="font-semibold">Procedure:</span></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
          <td class="border border-gray-300 px-3 py-2"></td>
        </tr>
        <tr>
          <td class="border border-gray-300  px-3 py-2">1. Practice procedure 1</td>
          <td class="border border-gray-300  px-3 py-2 text-center flex justify-center text-green-500">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
        </tr>
        <tr>
          <td class="border border-gray-300  px-3 py-2">2. Practice procedure 2</td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center flex justify-center text-green-500">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
          <td class="border border-gray-300  px-3 py-2 text-center">

          </td>
        </tr>
      </div>
    </table>
    <!-- <div class="flex justify-end mt-4">
      <button
        class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        <span>Submit Assessment</span>
      </button>
    </div> -->
  </div>
</template>

<style scoped>

</style>

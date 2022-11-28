<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ObjectiveInput",
  components: {
  },
  props: {
    objective: Object,
    index: Number,
  },
  setup(props, context) {
    const active = ref(false);
    const activeAdd = ref(false);

    const removeObjective = () => {
      // props.index ang value kay = activityIndex
      console.log('objective index', props.index);
      context.emit('removeObjective', props.index);
    }

    return {
      active,
      activeAdd,
      removeObjective
    }
  }
})

</script>

<template>
  <div class="flex gap-2 items-center">
    <textarea
      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
      type="text" placeholder="Write objective" v-model="objective.name"></textarea>
    <button type="button" @click="removeObjective"
      class="px-2 py-2 text-gray-500 bg-g-500 rounded-md bg-gray-300 hover:text-white hover:bg-red-700 focus:outline-none ">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ObjectiveInput",
  components: {
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
  <textarea
    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
    type="text" placeholder="Write objective"></textarea>
</template>

<style scoped>

</style>

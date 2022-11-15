<template>
  <main class="min-h-screen w-full bg-white text-gray-900">
    <router-view :key="$route.path" />
  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Form from "./components/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    Form
  }
})

</script>

<style scoped>

</style>

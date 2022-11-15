<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { ref } from 'vue'

export default defineComponent({
  name: "Dashboard",
  components: {
    Sidebar
  }
})

</script>

<template>
  <div class="h-screen flex bg-gray-100 text-gray-900">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

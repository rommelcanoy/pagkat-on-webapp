<script lang="ts">
import { ref, defineComponent } from 'vue'
import GeneralNav from '../../components/GeneralNav.vue';
import { studentDashboard } from "../../store";

export default defineComponent({
  name: "StudentLogin",
  components: {
    GeneralNav
  },
  setup() {
    const student_store = studentDashboard()
    return { student_store }
  }
})
</script>


<template>
  <section class="bg-gray-50 dark:bg-gray-900 md:h-screen flex flex-col">
    <general-nav />
    <div class="flex-1 flex items-center relative overflow-hidden varela">
      <div class="upper_left_shapes">
        <div class="bg-[#F49292] w-[150px] h-[150px] absolute top-[15px] left-[-30px] rounded-full"></div>
        <div class="bg-[#94A0AA] absolute w-[88px] h-[24px] left-[141px] top-[15px]"></div>
        <div class="bg-[#999898] absolute w-[164.66px] h-[65px] left-[493px] top-[-30px] rounded-full"></div>
        <div class="bg-[#F4C192] absolute w-[103px] h-[52px] left-[247px] top-[78px]"></div>
        <div class="absolute w-[200px] overflow-hidden inline-block left-[110px] top-[110px]">
          <div class=" h-[100px] w-[100px] bg-[#F8F387] rotate-45 transform origin-bottom-left"></div>
        </div>
        <div class="bg-[#90EF81] absolute w-[200px] h-[100px] left-[47px] top-[251px]"></div>
        <div class="bg-[#8199EF] absolute w-[128px] h-[128px] left-[-50px] top-[380px]"></div>
      </div>
      <div class="lower_right_shapes">
        <div class="bg-[#94A0AA] w-[156px] h-[156px] right-[-120px] bottom-[280px] absolute rounded-full"></div>
        <div class="bg-[#90EF81] absolute w-[92px] h-[92px] right-[-60px] bottom-[142px]"></div>
        <div class="bg-[#F49292] w-[136.44px] h-[136.44px] right-[100px] bottom-[-60px] absolute rounded-full"></div>
        <div class="bg-[#8199EF] absolute w-[85.08px] h-[176.97px] bottom-[124px] right-[72px]"></div>
        <div class="absolute bottom-[50px] right-[150px] w-[200px] overflow-hidden inline-block rotate-90">
          <div class=" h-[100px] w-[100px] bg-[#F8F387] rotate-45 transform origin-bottom-left"></div>
        </div>
        <div class="bg-[#8199EF] absolute w-[128px] h-[128px] bottom-[-50px] right-[360px]"></div>
      </div>
      <div class="flex flex-col flex-1 items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <!-- <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          PAGKAT-ON
        </a> -->
        <div
          class="w-full md:w-[377px] bg-[#8199EF] shadow rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl md:text-[40px] leading-snug text-white dark:text-white">
              Welcome <br /> Student
            </h1>
            <form class="space-y-4 md:space-y-4" action="javascript:void(0)" ref="student_form"
              @submit="this.student_store.get_student($event)">
              <div>
                <!-- <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                  Name</label> -->
                <input type="text" name="last_name" id="last_name"
                  class="bg-gray-50 text-center border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter last name">
              </div>
              <div>
                <!-- <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label> -->
                <input type="text" name="password" id="password" placeholder="Enter code"
                  class="bg-gray-50 text-center border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <!--            <router-link to="/student">-->
              <button type="submit" @click="this.$refs.student_form.submit()"
                class="my-6 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#4D69CB] text-white">Let's Go</button>
              <!--            </router-link>-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

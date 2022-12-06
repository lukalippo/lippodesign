<template>
  <div class="flex drop-shadow-sm z-10  bg-white justify-between sticky top-0 p-8">
    <div class="">
      <router-link to="./">
      <img  src="src/assets/logoBlack.svg" class="w-6" alt="" />
    </router-link>
    </div>
    <div class="flex">
    <Dropdown/>
  </div>
    
         
  </div>

</template>

<script setup>
import Dropdown from '../views/Dropdown.vue';

</script>


<style scoped></style>
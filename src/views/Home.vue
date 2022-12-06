<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-1/2 hidden lg:block">
        <img src="src/assets/pattenretangular.svg" class="object-cover w-full h-screen">
    </div >
    <div class="w-1/2 flex mx-auto justify-center lg:h-screen items-center">
    <div class="flex flex-col   ">
    <div class="flex  text-[44px] md:text-6xl text-secondary font-thin  capitalize">
      LIPPO GENNARO
    </div>
    <div class="flex  text-8xl md:text-9xl text-primary font-semibold ">
      DESIGN
    </div>
</div>
</div>
  </div>
  <div class="flex flex-col py-10  lg:flex-row " >
    <div class="flex items-center py-20 lg:w-2/12 justify-center  ">
        <div class="flex w-96 border-b-2 border-secondary justify-center lg:whitespace-nowrap  lg:origin-center  lg:-rotate-90  lg:text-5xl text-3xl font-bold text-primary">
          MY CREATIONS</div>
    
    </div> 
    <div class="relative lg:w-5/12">
       <div @click="(isOpen = true)" class="w-ful" > <img src="https://images.unsplash.com/photo-1558655146-d09347e92766" class="h-96 w-full lg:h-[600px]  object-cover " >  </div>
       <div v-if="isOpen" class="bg-primary/80 h-screen flex justify-center items-center w-screen z-50 fixed top-0 left-0">
          <button @click="isOpen = False" class="absolute top-10 right-10  text-white">Chiudi</button>
          <div class="flex justify-center m-5 ">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766" class=" h-screen  object-scale-down ">
          </div>
       </div>
      </div>
  
      <div class=" lg:w-5/12">
       <div @click="(luka = true)" class="w-ful" > <img src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9" class="h-96 w-full lg:h-[600px]  object-cover " >  </div>
      
       <div v-if="luka" class="bg-primary/80 h-full  flex justify-center w-full z-50 fixed top-0 left-0">
          <button @click="luka = False" class="absolute top-10 right-10  text-white">Chiudi</button>

          <div class="flex justify-center  ">
            <img src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9" class=" h-screen  object-scale-down ">
          </div>
      </div>
      </div>
  </div>
  

 
</template>



<script setup>
import {ref} from 'vue'
import About from './About.vue';

const luka =ref(false)
const isOpen =ref(false)

</script>

<style scoped>

</style>

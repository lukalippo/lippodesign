<template>
    <div class="relative">
     <button @click="(isOpen = true)">Open me! </button>
    <Teleport to="body">
     <div v-if="isOpen" class="bg-primary/50 h-screen flex justify-center items-center w-screen z-50 fixed top-0 left-0">
        <button @click="isOpen = False" class="absolute top-10 right-10  text-white">Chiudi</button>
        <div class="bg-white w-1/2 flex justify-center ">
            <h1>Ciao sono la tua modale</h1>
        </div>
     </div>
    </Teleport>
</div>

   
  </template>
  
  <script  setup>
   import {ref} from 'vue'
    const isOpen =ref(false)


  </script>
   
  <style scoped>
  </style>
  
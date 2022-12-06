
<template>
  
  <div class="flex   ">
    <button
       type:="button"
       class="text-xl z-20 "
      @click="toggle()"
       >
       <svg class="-rotate-90 hover:fill-secondary active-seconadry" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M30.8 40.2V21.8H12.2l4.5 4.5-2.4 2.4-8.6-8.6 8.6-8.6 2.4 2.4-4.5 4.5h18.6q1.4 0 2.4 1t1 2.4v18.4Z"/>
      </svg>


      </button>

  </div>
  
  <div v-show="isOpen" @click="toggle()"  class="bg-white w-full h-screen  absolute left-0 z-10 -top-0">
    <div class="flex justify-center h-screen  items-center  ">
      <div class="flex flex-col  text-9xl uppercase font-black text-primary justify-center items-center">
          <RouterLink to="/">
            <div 
              class="py-6 cursor-pointer hover:text-secondary flex group "
            >
            <span class="hidden   group-hover:flex group-hover:items-center">go
                <div class="flex  items-center">
                <span class="text-4xl px-6 ">to
                </span>
              </div>
              </span>
               <span>Home</span>
            </div>
          </RouterLink>
    
          <router-link to="About">
           
            <div 
            
              class="py-6 cursor-pointer  hover:text-secondary group flex  hover: border-secondary">
              <span class="hidden   group-hover:flex group-hover:items-center">go
                <div class="flex  items-center">
                <span class="text-4xl px-6 ">to
                </span>
              </div>
              </span>
              

               <span>About</span>
            </div>
        </router-link>
          <router-link to="Service"
            ><div 
              class="py-6 cursor-pointer flex hover:text-secondary group hover: border-secondary"
            >
            <span class="hidden    group-hover:flex group-hover:items-center">go
                <div class="flex  items-center">
                <span class="text-4xl px-6 ">to
                </span>
              </div>
              </span>
               <span>Service</span>
            </div>
          </router-link>
         </div>
    </div>
  </div>
</template>

<script >
  export default {
    nome: 'Dropdown', 

    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    },

};
</script>
 
<style scoped>


</style>

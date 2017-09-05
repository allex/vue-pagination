<template>
  <div class="">
    <v-page :total="22" :current="6" show-elevator></v-page>  
    </br>
    </br>
    </br>
    <v-page :total="22" :current="6" show-sizer></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" show-total></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1"></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" simple></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" simple show-sizer></v-page>
    </br>
    </br>
    </br>
  </div>
</template>

<script>

  import vPage from '@/Page.vue'
  export default {
    data: function () {
      return {
        
      }
    },
    props:{
      
    },
    components: {vPage}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  
</style>
<template>
  <div class="">
    <v-page :total="22" :current="6" show-elevator :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>  
    </br>
    </br>
    </br>
    <v-page :total="22" :current="6" show-sizer :i18n="{jump:'跳至',page:'页',total:'总页数',prev:'上一页',next:'下一页'}"></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" show-total :i18n="{jump:'跳至',page:'页',total:'总页数',prev:'上一页',next:'下一页'}"></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" :i18n="{jump:'跳至',page:'页',total:'总页数',prev:'上一页',next:'下一页'}"></v-page>
    </br>
    </br>
    </br>
    <v-page :total="22" :current="1" simple :i18n="{jump:'跳至',page:'页',total:'总页数',prev:'上一页',next:'下一页'}"></v-page>
    </br> 
    </br>
    </br>  
    <v-page :total="22" :current="1" simple show-sizer :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>
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
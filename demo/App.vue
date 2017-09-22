<template>
  <div class="">
    <v-page :total="total" :current="current" show-elevator @page="page" :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>  
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
        current:9,
        total:100000
      }
    },
    props:{
      
    },
    methods:{
        page(obj){
           console.log(obj)
        }
    },
    components: {vPage},
    mounted(){
        setTimeout(()=>{
            this.current = 500
            this.total = 999999
        },2000)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  
</style>
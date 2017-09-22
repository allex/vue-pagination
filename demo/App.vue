<template>
  <div>
    <v-page :total="total" :current="current" show-elevator @page="page" :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>
    <br />
    <br />
    <br />
    <v-page :total="23" :current="6" show-sizer></v-page>
    <br />
    <br />
    <br />
    <v-page :total="22" :current="1" show-total></v-page>
    <br />
    <br />
    <br />
    <v-page :total="22" :current="1"></v-page>
    <br />
    <br />
    <br />
    <v-page :total="22" :current="1" simple></v-page>
    <br />
    <br />
    <br />
    <v-page :total="22" :current="1" simple show-sizer :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
  import vPage from '@/Page.vue'

  export default {
    data: function () {
      return {
        current: 9,
        total: 100000
      }
    },
    props: {

    },
    methods: {
      page (obj) {
        console.log(obj)
      }
    },
    components: {vPage},
    mounted () {
      setTimeout(() => {
        this.current = 500
        this.total = 999999
      }, 2000)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>

<template>
  <ul class="v-page" v-if="!simple">
    <li class="v-page-item v-page-text">
      <span>{{i18n.total + ' / ' + totalPage}}</span>
    </li>
    <li class="v-page-item v-page-prev" @click="previousPage()" :class="currentPage == 1 ? 'v-page-disabled' : ''" :title="i18n.prev">
      <a><i class="fa fa-angle-left"></i></a>
    </li>
    <li
      class="v-page-item"
      v-for="(item,index) in pageArr"
      :title="item"
      :class="currentPage == item ? 'v-page-item-active' : ''"
      @click="ckPages(item,index)">
      <a>{{item}}</a>
    </li>
    <li class="v-page-item v-page-next" @click="nextPage()" :class="currentPage == totalPage ? 'v-page-disabled' : ''" :title="i18n.next">
      <a><i class="fa fa-angle-right"></i></a>
    </li>
  
    <li class="v-page-item v-page-text" v-if="showSizer || showElevator">
      <span>{{i18n.jump}}</span>
    </li>
    <li class="v-page-item v-page-label" v-if="showSizer || showElevator">
      <label>
        <input
          type="text"
          name=""
          :value="currentPage"
          @keydown="keyDown"
          @keyup="keyUp"
          @change="keyUp">
      </label>
    </li>
    <li class="v-page-item v-page-text" v-if="showSizer || showElevator">
      <span>{{i18n.page}}</span>
    </li>
  </ul>
  <ul v-else class="v-simple">
    <li class="v-page-simple-item v-page-text">
      <span></span>
    </li>
    <li class="v-page-simple-item v-page-prev" @click="previousPage()" :class="currentPage == 1 ? 'v-page-disabled' : ''" :title="i18n.prev">
      <a><i class="fa fa-angle-left"></i></a>
    </li>
    <li
      class="v-page-simple-item"
      v-for="(item,index) in pageArr"
      :class="currentPage == item ? 'v-page-simple-item-active' : ''"
      :title="item"
      @click="ckPages(item,index)">
      <a>{{item}}</a>
    </li>
    <li class="v-page-simple-item v-page-next" @click="nextPage()" :class="currentPage == totalPage ? 'v-page-disabled' : ''" :title="i18n.next">
      <a><i class="fa fa-angle-right"></i></a>
    </li>
    <li class="v-page-simple-item v-page-text" v-if="showSizer">
      <span>{{i18n.jump}}</span>
    </li>
    <li class="v-page-simple-item v-page-label" v-if="showSizer">
      <label>
        <input
          type="text"
          name=""
          :value="currentPage"
          @keydown="keyDown"
          @keyup="keyUp"
          @change="keyUp">
      </label>
    </li>
    <li class="v-page-simple-item v-page-text" v-if="showSizer">
      <span>{{i18n.page}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Page',
    data() {
      return {
        pageArr:[],
        currentPage: this.current,
        totalPage:this.total,
        i18n:{}
      }
    },
    props: {
      i18np:{
        type:Object,
        default(){
          return {}
        }
      },
      total:{
        type: Number
      },
      current: {
        type: Number,
        default: 1
      },
      /**
       * 小
       */
      simple: {
        type: Boolean,
        default: false
      },
      /**
       * 带页数点击...最后五页
       */
      showSizer: {
        type: Boolean,
        default: false
      },
      /**
       * 总数
       */
      showTotal: {
        type: Boolean,
        default: false
      },
      /**
       * 已当前页计算前/后五页
       */
      showElevator: {
        type: Boolean,
        default: false
      }
    },
    watch:{
      /**
       * 监听当前页数值变化
       */
      total (val) {
        if (val > this.totalPage) {
          this.currentPage = 1;
        }
        this.totalPage = val;
        this.rtPageArr(this.currentPage,this.totalPage);
      },
      current(newVal,oldVal){
        this.currentPage = newVal
        this.rtPageArr(this.currentPage,this.totalPage)
      },
      total(newVal,oldVal){
        this.totalPage = newVal
        this.rtPageArr(this.currentPage,newVal)
      }
    },
    methods: {
      /**
       * 分页数组
       */
      rtPageArr(pageindex,allpage){
        var page = [];
        if (allpage <= 10) {
          for (var i = 1; i <= allpage; i++) {
            page.push(i)
          }
        } else {
          if (pageindex <= 4) {
            for (var i = 1; i <= 5; i++) {
              page[page.length] = i
            }
            if (!this.simple && !this.showTotal){
              page.push('...');
              page[page.length] = allpage;
            }
          } else if (pageindex >= allpage - 3) {
            if (!this.simple && !this.showTotal){
              page.push(1);
              page.push('...');
            }
            for (var i = allpage - 4; i <= allpage; i++) {
              page.push(i);
            }
          } else {
            if (!this.simple && !this.showTotal){
              page.push(1);
              page.push('...');
            }
            for (var i = pageindex - 2; i <= pageindex + 2; i++) {
              page.push(i);
            }
            if (!this.simple && !this.showTotal){
              page.push('...');
              page.push(allpage)
            }
          }
        }
        this.pageArr = [];
        this.pageArr = page;
      },
      /**
       * 点击分页
       */
      ckPages(itemPage,index){
        if (itemPage != '...') {
          this.currentPage = itemPage;
          this.rtPageArr(this.currentPage,this.totalPage);
        }else{
          /**
           * 五页计算
           */
          if (this.showElevator) {
            this.currentPage = index == 1 ? (this.currentPage - 5) : (this.currentPage + 5);
          }else{
            if (index == 1) {
              this.currentPage = 1;
            }else{
              this.currentPage = this.totalPage;
            }
          }
          /**
           * 前五页计算为0默认第一页
           */
          if (!this.currentPage) {
            this.currentPage = 1;
          }
          /**
           * 后五页计算当前页大于总页数默认最后一页
           */
          if (this.currentPage > this.totalPage) {
            this.currentPage = this.totalPage;
          }
          this.rtPageArr(this.currentPage,this.totalPage);
        }
        this.$emit('page',{
          current:this.currentPage
        })
      },
      /**
       * 上一页
       */
      previousPage:function() {
        if (this.currentPage == 1) return;
        this.currentPage = this.currentPage - 1;
        this.rtPageArr(this.currentPage,this.totalPage);
        this.$emit('page',{
          current:this.currentPage
        })
      },
      /**
       * 下一页
       */
      nextPage:function() {
        if (this.currentPage == this.totalPage) return;
        this.currentPage = this.currentPage + 1;
        this.rtPageArr(this.currentPage,this.totalPage);
        this.$emit('page',{
          current:this.currentPage
        })
      },
      keyDown (e) {
          const key = e.keyCode;
          const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 37 || key == 39;
          if (!condition) {
              e.preventDefault();
          }
      },
      keyUp (e) {
        const key = e.keyCode;
        const val = parseInt(e.target.value);
        if (key == 13) {
          let page = 1;
          if (val > this.totalPage) {
              page = this.totalPage;
          } else if (val <= 0) {
              page = 1;
          } else {
              page = val;
          }
          this.currentPage = page;
          this.rtPageArr(this.currentPage,this.totalPage);
        }
      }
    },
    mounted(){
      this.rtPageArr(this.currentPage,this.totalPage);
      if (JSON.stringify(this.i18np) == '{}') {
        this.i18n = {jump:'跳至',page:'页',total:'总页数',prev:'上一页',next:'下一页'}
      }else{
        this.i18n = this.i18np;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

  @import "./theme.scss";

  .v-page-item {
    display: inline-block;
    vertical-align: middle;
    min-width: 30px;
    height: 30px;
    line-height: 30px;
    margin-right: 4px;
    text-align: center;
    list-style: none;
    background-color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    border: 1px solid #dddee1;
    border-radius: 4px;
    transition: border .2s ease-in-out,color .2s ease-in-out;
    a {
      font-size:$font-primary-size;
      color:$font-primary-color;
    }
    &:hover {
      border-color: $color-primary-blue-active;
      a {
        color: $color-primary-blue-active;
      }
    }
  }

  .v-page-next,
  .v-page-prev {
    a {
      i {
        font-size:14px;
      }
    }
  }

  .v-page-next {
    margin-right:0;
  }

  .v-page-text {
    border:0;
    span {
      font-size:$font-primary-size;
      color:$font-primary-color;
    }
  }

  .v-page-ellipsis {
    a {
      i {
        font-size:10px;
        color:#ccc;
      }
      .fa-angle-double-right,.fa-angle-double-left {
        display: none;
        color:$color-primary-blue-active;
      }
    }
    &:hover {
      a {
        .fa-ellipsis-h {
          display: none;
        }
        .fa-angle-double-right,.fa-angle-double-left {
          display: inline-block;
        }
      }
    }
  }

  .v-page-label {
    margin-right: 0px;
    label {
      input {
        width: 34px;
        height: 26px;
        line-height: 26px;
        border:0;
        outline:none;
        padding:0 8px;
        font-size:$font-primary-size;
        color:$font-primary-color;
      }
    }
  }

  .v-page-item-active {
    background-color: $color-primary-blue-active;
    border-color: $color-primary-blue-active;
    a,&:hover a {
      color:#fff;
    }
  }

  .v-page-disabled {
    cursor: not-allowed;
    a {
      color: #ccc
    }
    &:hover {
      border-color: #dddee1;
      a {
        color: #ccc;
        cursor: not-allowed
      }
    }
  }

  .v-page-simple-item {
    display: inline-block;
    vertical-align: middle;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    margin-right: 4px;
    text-align: center;
    list-style: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    border-radius: 4px;
    transition: border .2s ease-in-out,color .2s ease-in-out;
    a {
      font-size:$font-primary-size;
      color:$font-primary-color;
    }
    &:hover {
      border-color: $color-primary-blue-active;
      a {
        color: $color-primary-blue-active;
      }
    }
    &.v-page-simple-item-active {
      background-color:$color-primary-blue-active;
      a {
        color:#fff;
      }
    }
  }

  .v-page-simple-item.v-page-label {
    border: 1px solid #dddee1;
    label {
      input {
        height: 20px;
        line-height: 20px;
      }
    }
  }

</style>

# @vue/vue-pagination

A pagination based on VUE

## Installation

## Module Exposes

## Installation

NPM:

```sh
npm i @vue/pagination
```

Combo:

```html
<script src="//s2.analysys.cn/-/@vue/pagination@1.0.1"></script>
```

## APIs

- js: vPagination
- css: v-pagination

```js
import { vPagination } from '@vue/pagination'
```

## Example

```html
<template>
  <div>
    <v-page :total="total" :current="current" show-elevator @page="page" :i18n="{jump:'Jump',page:'Page',total:'PageCount',prev:'Prev',next:'Next'}"></v-page>
  </div>
</template>

<script>
  import { vPagination as vPage } from '@vue/pagination'

  export default {
    data: function () {
      return {
        current: 9,
        total: 100000
      }
    },
    methods: {
      page (obj) {
        console.log(obj)
      }
    },
    components: { vPage },
    mounted () {
      setTimeout(() => {
        this.current = 500
        this.total = 999999
      }, 2000)
    }
  }
</script>
```

### Online

=> <https://s2.analysys.cn/-/@vue/pagination@1.0.1/dist/>

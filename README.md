# @vue/vue-pagination

A pagination based on VUE

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

### vPage

#### props

- `i-1-8n` ***Object*** (*optional*) `default: [object Object]`
- `total` ***Number*** (*optional*)
- `current` ***Number*** (*optional*) `default: 1`
- `simple` ***Boolean*** (*optional*) `default: false`

- `show-sizer` ***Boolean*** (*optional*) `default: false`
带页数点击...最后五页

- `show-total` ***Boolean*** (*optional*) `default: false`
总数

- `show-elevator` ***Boolean*** (*optional*) `default: false`
已当前页计算前/后五页

#### events

- `page` undefined

#### methods

- `rtPageArr(pageindex, allpage)`
分页数组

- `ckPages(itemPage, index)`
点击分页

- `previousPage()`
上一页

- `nextPage()`
下一页

- `isNumber(num)`
- `keyDown(e)`
- `keyUp(e)`

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

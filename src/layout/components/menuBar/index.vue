<template>
  <el-menu default-active="1" active-text-color="#409EFF" text-color="#FFF" class="el-menu" :collapse="collapsed">
    <menuItem :menus="menus"/>
  </el-menu>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue';
import menuItem from './menuItem.vue';

defineProps({
  collapsed: {
    type: Boolean
  }
})

const menus = reactive(
  [{
    "path": "/",
    "redirect": "/index",
    "name": "Index",
    "meta": {
      title: '首页',
      icon: 'house'
    },
    "children": [{
      "path": "/index",
      "name": "Index",
      "meta": {
        title: '首页',
        icon: 'house'
      },
    }]
  }, {
    "path": "/user",
    "redirect": "/user",
    "name": "User",
    "meta": {
      title: '用户管理',
      affix: true,
      icon: 'UserFilled'
    },
    "children": [{
      "path": "/manager",
      "name": "UserManager",
      "meta": {
        title: '用户管理',
        icon: 'UserFilled'
      },
    }]
  }, {
    "path": "/db",
    "redirect": "/db",
    "name": "Db",
    "meta": {
      title: '数据库',
      affix: true,
      icon: 'UserFilled'
    },
    "children": [{
      "path": "/index",
      "name": "DbIndex",
      "meta": {
        title: '数据库列表',
        icon: 'UserFilled'
      },
    }, {
      "path": "/dbConfig",
      "name": "DbIndex",
      "meta": {
        title: '数据库配置',
        icon: 'UserFilled'
      },
    }]
  }])

</script>
  
<style lang="scss">
.el-menu {
  width: 200px;
  min-height: 400px;
  height: 100vh;
  background-color: $menuBg;
  overflow: hidden;
  border: none;
}
</style>
  
<template>
  <div>
    <el-menu  class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
      <el-submenu v-for="(menu,level1index) in menuList" :key="menu.MENU_CODE" :index="getIndexStr(level1index)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{menu.MENU_NAME}}  </span>
          <!--<span slot="title">{{index}}</span>-->
        </template>
        <el-menu-item-group v-for="(level2Menu,level2index) in menu.CHILD_LIST" :key="level2Menu.MENU_CODE" :index="getIndexStr2(level1index,level2index)">
          <span slot="title">{{level2Menu.MENU_NAME}} </span>
          <el-menu-item v-for="(level3Menu,level3index) in level2Menu.CHILD_LIST" :key="level3Menu.MENU_CODE" :index="getIndexStr3(level1index,level2index,level3index)">
            {{level3Menu.MENU_NAME}}
          </el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'leftMenu',
  data () {
    return {
      menuList: ''
    }
  },
  created: function () {
    var url = '/data/plf/privilege/menu/getMenuByRoleId'
    axios.post(url)
      .then((response) => {
        this.menuList = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    getIndexStr (idx1) {
      var returnVal = (idx1 + 1) + ''
      return returnVal
    },
    getIndexStr2 (idx1, idx2) {
      var returnVal = (idx1 + 1) + '-' + (idx2 + 1)
      return returnVal
    },
    getIndexStr3 (idx1, idx2, idx3) {
      var returnVal = (idx1 + 1) + '-' + (idx2 + 1) + '-' + (idx3 + 1)
      console.log(returnVal)
      return returnVal
    }
  }

}
</script>

<style scoped>

</style>
